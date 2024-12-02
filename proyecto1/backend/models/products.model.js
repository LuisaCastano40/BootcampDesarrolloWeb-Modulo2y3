//importamos mongoose -> Schema -> plantilla de los productos
import mongoose from 'mongoose';

const schema = mongoose.Schema;

//Estructrando cómo se van a guardar la información de los productos en nuestra db
//Schema es la plantilla
const productSchema = new schema({
    nombre:{
        type: String,
        require:true
    },
    imagen:{
        type: String
    },
    precio:{
        type: Number,
        require:true
    },
    disponible: { type: Boolean, required: true },
    existencias: { type: Number, required: true },
});

//Utilizamos esa plantilla para cear nuestro modelo -> creamos la coleccion donde se van a guardar los datos
//mongoose.model() -> crear nuestro modelo 
//1. nombre de la coleccion que me va a guartar los datos
//2. necesitamos darle como parámetro el schema que hicimos
export const productModel = mongoose.model('usuario', productSchema);


import mongoose from 'mongoose';

const usuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  correoElectronico: { type: String, required: true, unique: true },
  contrasenia: { type: String, required: true },
  rol: { 
    type: String, 
    enum: ['cliente', 'admin'],  // Puede ser cliente o admin
    default: 'cliente'           // Por defecto, es cliente
  }
}, { versionKey: false, timestamps: true });  // Opciones adicionales

export const Usuario = mongoose.model('Usuario', usuarioSchema);
