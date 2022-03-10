import { DataTypes } from "sequelize";
import db from "../config/db/connection";
import Usuario from "./usuario.model";

const Rol = db.define('Rol', {
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, // Automatically gets converted to SERIAL for postgres
        allowNull: false,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    // sequelize,
    modelName: 'Rol',
    freezeTableName: true,  // La tabla tendra el mismo nombre que el modelo
    timestamps: false,
})

// Rol -> Usuario 1:N
Rol.hasMany(Usuario, {
    foreignKey: 'rol_id',
    as: 'Producto'
})

export default Rol 