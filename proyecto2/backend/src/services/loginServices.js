// importamos dependecias que vamos a necesitar
import { userModel } from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import { generateToken } from '../lib/jwt.js';


// necesitamos una funcion para la validación de usuario y la generación de token

const loginService = async (req, res) => {

    try {

        // estas son las credenciales que ingresamos en el formulario de ingreso y vamos a verificar que estén en la base de datos
        const { email, password } = req.body;
        // buscar en la base de datos si existe ese email
        const userFound = await userModel.findOne({
            correo: email
        });

        // validación en caso de que no se encuentren usuarios con ese email
        if (!userFound) {
            return res.status(404).json({
                estado: '404',
                mensaje: 'Usuario no encontrado, por favor registrarse'
            })
        }

        // comparamos password con la contraseña guardada en la base de datos
        // comparamos 1. la contraseña que ingresa y 2. la contraseña guardada en la base de datos
        const isValidPassword = await bcrypt.compare(password, userFound.contrasena);

        // validar si la contraseña en correcta
        if (!isValidPassword) {
            return res.status(400).json({
                estado: '400',
                mensaje: 'Error al iniciar sesión, contraseña incorrecta'
            });
        }

        // ---------------------------- AUTENTICACIÓN-------------------------------------//

        // crear nuestro payload -> info del usuario que pasamos para crear el token
        // los datos son de mi usuario encontrado que lo estoy guardando en userFound

        const payload = {
            id: userFound._id,
            name: userFound.nombreCompleto,
        }

        // validar si mi usuario ingresado es administrador
        if (userFound.__t === 'Admin' || userFound.categoriaAdmin) {
            payload.isAdmin = true;
        }

        // GENERAR NUESTRO TOKEN
        const token = await generateToken(payload);

        // Si se inicií sesión correctamente, con credendiales correctas y se creó un token
        return res.status(200).json({
            estado: '200',
            mensaje: 'Inicio de sesión exitoso',
            tokenGenerado: token
        });

    } catch (error) {
        return res.status(400).json({
            estado: '400',
            mensaje: 'Hubo un error al intentar iniciar sesión',
            error: error.message || error
        });
    }

}

export default loginService;