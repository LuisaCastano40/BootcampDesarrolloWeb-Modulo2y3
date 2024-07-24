import { adminModel } from "../models/admin.model.js";
// crear y mostrar todos y eliminar

// petición POST para crear administradores
export const postAdmin = async (request, response) => {
    return response.send('Funciona la petición POST de los admin');
}

// Mostrar todos los administradores
export const getAdmin = async (request, response) => {
    return response.send('Funciona la petición GET de TODOS los admin');
}

// Eliminar administradores
export const deleteAdminById = async (request, response) => {
    return response.send('Funciona la petición DELETE de un admin');
}