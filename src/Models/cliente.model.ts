import { DataTypes } from "sequelize";
import db from "../config/db/connection";

const Cliente = db.define('Cliente', {
    nombres: {
        type: DataTypes.STRING
    },
    apellidos: {
        type: DataTypes.STRING
    },
    telefono: {
        type: DataTypes.STRING
    },
    correo: {
        type: DataTypes.STRING
    },
    estado:{
        type: DataTypes.TINYINT
    }
})

export default Cliente