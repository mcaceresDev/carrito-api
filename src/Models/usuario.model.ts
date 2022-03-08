import { DataTypes } from "sequelize";
import db from "../config/db/connection";

export interface UserIModel {
    id_usuario: number | null,
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
    primer_nombre: DataTypes.STRING,
    segundo_nombre: DataTypes.STRING,
    primer_apellido: DataTypes.STRING,
    segundo_apellido: DataTypes.STRING,
    telefono: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    estado: DataTypes.TINYINT,
    rol_id: DataTypes.TINYINT,
    carrito_id: DataTypes.INTEGER
})



export default Usuario