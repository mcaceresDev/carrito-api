import { DataTypes } from "sequelize";
import db from "../config/db/connection";
import Categoria from "./categoria.model";

const Producto = db.define('Producto', {
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
    
})

//Producto -> Categoria N:1
Producto.belongsTo(Categoria, {
    foreignKey: 'categoria_id',
    as: 'Categoria'
})

export default Producto