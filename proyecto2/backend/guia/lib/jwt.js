// ACÁ VAMOS A CONFIGURAR LOS MÉTODOS NECESARIOS PARA GENERAR Y VERIFICAR NUESTRO
// TOKEN E AUTENTICACIÓN

// 1. Instalar la librería -> npm i jsonwebtoken
// 2. crearnos una clave secreta

// ---------------------------------------------------------------------------

// Importar módulos y dependencias que necesitemos
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const key = process.env.SECRET_KEY;


// 3. estructurar las funciones para generar y verificar JWT

// Función para generar tokens (JWT)
export function generateToken (payload) {
    // nosotros vamos a configurar de una vez esta función para que sea asincrónica
    return new Promise((resolve, reject)=>{
        // para generarlo necesitamos payload, clave secreta, tiempo de expiración
        // Además, le voy a decir cómo debe trabajar con los errores y aciertos
        jwt.sign(payload, key, {expiresIn: '1h'}, (error, token)=>{
            // validaar si hay error al generar token
            if(error){
                // le decimos qué pasa si todo sale mal
                reject(new Error('Error al generar JWT ' + error.message));
            }else{
                // le decimos qué pasa si todo bien
                resolve(token);
            }
        });
    });
}

// Función para verificar tokens (JWT)
export function verifyToken(token) {

    return new Promise((resolve, reject)=>{
        jwt.verify(token, key, (error, decoded)=>{
        // validando decodificación
            if(error){
                // le decimos qué pasa si todo sale mal
                reject(new Error('Error al decodificar JWT' + error.message));
            }else{
                // le decimos qué pasa si todo bien
                resolve(decoded);
            }
        });

    });

}