import { DataTypes } from "sequelize/types";
import db from "../config/db/connection";

const Factura_Producto = db.define('Factura_Producto', {
    factura_id: DataTypes.INTEGER,
    producto_id: DataTypes.INTEGER,
    precio: DataTypes.DECIMAL(6,2),
    cantidad: DataTypes.INTEGER,
    iva: DataTypes.DECIMAL(6,2)
})

export default Factura_Producto