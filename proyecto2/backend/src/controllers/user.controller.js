import { userModel } from "../models/user.model.js"

// Crear, actualizar y elimimar usuarios, poder visualizar todos mis usuarios o un solo usuario

// petrición POST para crear usuarios -> son funciones
// función declarada -> función flecha

export const postUser = async (request, response) => {
    
    try{
        // desestructuración
        // const {nombreCompleto, correo, contrasena, imagen} = request.body;

        // const newUser = await userModel.create({
        //     nombreCompleto,
        //     correo,
        //     contrasena,
        //     imagen
        // });

        const newUser = await userModel.create(request.body)

        return response.status(201).json({
            estado: '201',
            mensaje: 'Usuario creado correctamente',
            datos: newUser
        })
    } catch(error){
        return response.status(400).json({
            estado: '400',
            mensaje: 'Ocurrió un problema al crear un usuario',
            datos: error
        })
    }
}

// Mostrar todos los usuarios
export const getUsers = async (request, response) => {
    return response.send('Funciona la petición GET de TODOS los usuarios');
}

// Mostrar un solo usuario
export const getUserById = async (request, response) => {
    return response.send('Funciona la petición GET de Un solo usuario');
}

// Actualizar usuario
export const putUserById = async (request, response) => {
    return response.send('Funciona la petición PUT de los usuarios');
}

//  Eliminar usuario
export const deleteUserById = async (request, response) => {
    return response.send('Funciona la petición DELETE de los usuarios');
}