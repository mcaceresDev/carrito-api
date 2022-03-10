import { DataTypes } from "sequelize";
import db from "../config/db/connection";
import Categoria from "./categoria.model";

const Producto = db.define('producto', {
    id_producto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, // Automatically gets converted to SERIAL for postgres
        allowNull: false,
    },
    nombre:{
        type: DataTypes.STRING
    },
    descripcion:{
        type: DataTypes.STRING
    },
    marca:{
        type: DataTypes.STRING
    },
    modelo:{
        type: DataTypes.STRING
    },
    precio:{
        type: DataTypes.STRING
    },
    stock:{
        type: DataTypes.INTEGER
    },
    estado:{
        type: DataTypes.STRING
    },
    categoria_id:{
        type: DataTypes.TINYINT
    }
    
}, {
    modelName: 'producto',
    freezeTableName: true,  // La tabla tendra el mismo nombre que el modelo
    timestamps: false,
})

//Producto -> Categoria N:1
// Producto.belongsTo(Categoria, {
//     foreignKey: 'categoria_id',
//     as: 'Categoria'
// })

export default Producto