import mongoose from "mongoose";
import { userModel } from "./user.model,js";

const adminSchema = new schema({
    categoria: {
        type: String,
        required: true,
        default: 'admin'
    }
});

// Usa `discriminator` para crear el modelo `Admin` basado en `Usuario`
export const AdminModel = userModel.discriminator('Administrador', adminSchema);

// En Mongoose, discriminator permite implementar herencia de esquemas de una manera similar a la herencia en POO. Permite crear submodelos que heredan el esquema base y añadirles campos adicionales.