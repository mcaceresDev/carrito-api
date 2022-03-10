import { DataTypes } from "sequelize";
import db from "../config/db/connection";
import Usuario from "./usuario.model";
import Carrito_Producto from "./carrito-producto.model";

const Carrito = db.define('carrito', {
    id_carrito: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    fecha_creacion: {
        type: DataTypes.DATE
    }
}, {
    // sequelize,
    modelName: 'Carrito',
    freezeTableName: true,  // La tabla tendra el mismo nombre que el modelo
    timestamps: false,
})


// Carrito.hasMany(Carrito_Producto, {
//     as: 'Carrito_Carrito',
//     foreignKey: 'carrito_id',
// });


export default Carrito