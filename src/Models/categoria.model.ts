import { DataTypes } from "sequelize/types";
import db from "../config/db/connection";

const Categoria = db.define('Categoria',{
    nombre: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: true
    }
})

export default Categoria