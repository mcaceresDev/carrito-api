import { DataTypes } from "sequelize";
import db from "../config/db/connection";
import Producto from "./producto.model";

const Categoria = db.define('categoria',{
    id_categoria: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, // Automatically gets converted to SERIAL for postgres
        allowNull: false,
    },
    nombre: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    modelName: 'categoria',
    freezeTableName: true,  // La tabla tendra el mismo nombre que el modelo
    timestamps: false,
})

// Categoria -> Producto 1:N
Categoria.hasMany(Producto, {
    // sourceKey: 'id_producto',
    foreignKey: 'categoria_id',
    as: 'Producto'
})

export default Categoria