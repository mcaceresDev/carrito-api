import { DataTypes } from "sequelize";
import db from "../config/db/connection";
import Producto from "./producto.model";

const Categoria = db.define('Categoria',{
    nombre: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: true
    }
})

// Categoria -> Producto 1:N
// Categoria.hasMany(Producto, {
//     // sourceKey: 'id_producto',
//     foreignKey: 'categoria_id',
//     as: 'Producto'
// })

export default Categoria