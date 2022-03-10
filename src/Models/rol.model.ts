import { DataTypes } from "sequelize";
import db from "../config/db/connection";

const Rol = db.define('Rol', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default Rol 