// 1. Importar controladores y dependencias

import { createUser, showUsers } from '../controllers/user.controller.js';
import express from 'express';



// 2. Configurar el router
export const usersRouter = express.Router();


// 3. Nos creamos la ruta para cada petición

// Ruta para el post
usersRouter.post('/crear', createUser);

// Ruta para get
usersRouter.get('/obtener', showUsers);