import { DataTypes } from "sequelize/types";
import db from "../config/db/connection";

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

export default Producto