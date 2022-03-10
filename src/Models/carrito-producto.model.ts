import { DataTypes } from "sequelize";
import db from "../config/db/connection";

const Carrito_Producto = db.define('Carrito_Producto', {
    carrito_id: DataTypes.INTEGER,
    producto_id: DataTypes.INTEGER,
    cantidad: DataTypes.INTEGER,
    precio: DataTypes.DECIMAL,
    iva: DataTypes.DECIMAL,
    total: DataTypes.DECIMAL,
    fecha_agregado: DataTypes.DATE
})

export default Carrito_Producto