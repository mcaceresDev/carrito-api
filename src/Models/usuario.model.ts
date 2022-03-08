import { DataTypes } from "sequelize";
import db from "../config/db/connection";

export interface UserIModel {
    id_usuario: number | null | any,
    primer_nombre: string,
    segundo_nombre: string,
    primer_apellido: string,
    segundo_apellido: string,
    telefono: string,
    email: string,
    password: string,
    estado: number,
    rol_id: number,
    carrito_id: number
}

const Usuario = db.define('Usuario', {
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, 
        allowNull: false,
    },
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
    estado: {
        type: DataTypes.TINYINT
    },
    rol_id: {
        type: DataTypes.TINYINT
    },
    carrito_id: {
        type: DataTypes.INTEGER
    }
})

export default Usuario