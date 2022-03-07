import { DataTypes } from "sequelize";
import db from "../config/db/connection";

const Usuario = db.define('Usuario', {
    primer_nombre: {
        type: DataTypes.STRING
    },
    segundo_nombre: {
        type: DataTypes.STRING
    },
    primer_apellido: {
        type: DataTypes.STRING
    },
    segundo_apellido: {
        type: DataTypes.STRING
    },
    telefono: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    estado:{
        type: DataTypes.TINYINT
    },
    rol_id:{
        type: DataTypes.TINYINT
    },
    carrito_id:{
        type: DataTypes.INTEGER
    }
})

export default Usuario