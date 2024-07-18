//importamos mongoose -> Schema -> plantilla de los productos
import mongoose from 'mongoose';

const schema = mongoose.Schema;

const userSchema = new schema({
    nombreCompleto:{
        type: String,
        required:true
    },
    correo:{
        type: String,
        required: true
    },
    contrasena:{
        type: Number,
        required:true
    },
    imagen:{
        type: Number,
        required:true
    }
});

export const userModel = mongoose.model('usuario', userSchema);