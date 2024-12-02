// ESTE ARCHIVO NOS PERMITE CREAR LAS RUTAS PARA PODER HACER LAS PETICIONES GET, POST, PUT, DELETE

// 1. importar mis controladores y las dependencias necesarias
import { getProduct, postProduct, putProductById, deleteProductById } from '../controllers/product.controller.js';
import express from 'express'; //también nos ayuda a hacer las rutas para las peticiones -> Router
import auth from '../middleware/auth.js';


// 2. Configurar el router de express
export const productRouter = express.Router();


// 3. Crearme las rutas para las peticiones de mis productos

// Ruta para la petición GET -> leer, obtener, mostrar
// primero, determino la ruta, luego le indeico qué debe hacer (el controlador)
productRouter.get('/obtener', getProduct);

// Ruta para la petición POST -> crear 
productRouter.post('/crear', auth(), postProduct);

// Ruta para la petición PUT -> actualiza la información
productRouter.put('/actualizar/:id', auth('admin'), putProductById );

// Ruta para la petición DELETE -> eliminar
productRouter.delete('/eliminar/:id', auth('admin'), deleteProductById);