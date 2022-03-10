import { DataTypes } from "sequelize";
import db from "../config/db/connection";
import Carrito from "./carrito.model";
import Producto from "./producto.model";

const Carrito_Producto = db.define('carrito_producto', {
    id_carrito_producto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, // Automatically gets converted to SERIAL for postgres
        allowNull: false,
    },
    carrito_id: DataTypes.INTEGER,
    producto_id: DataTypes.INTEGER,
    cantidad: DataTypes.INTEGER,
    precio: DataTypes.DECIMAL,
    iva: DataTypes.DECIMAL,
    total: DataTypes.DECIMAL,
    fecha_agregado: DataTypes.DATE
}, {
    modelName: 'carrito_producto',
    freezeTableName: true,  // La tabla tendra el mismo nombre que el modelo
    timestamps: false,
})

//Usuario(tabla A) -> Carrito(tabla B) 1:1  La llave foranea definida en A
// Carrito_Producto.belongsTo(Carrito, {
//     foreignKey: 'carrito_id',
//     as: 'Carrito_Producto'
// })
Carrito_Producto.belongsTo(Producto, {
    foreignKey: 'producto_id',
    as: 'Producto'
})

Carrito.hasMany(Carrito_Producto, {
    as: 'Producto',
    foreignKey: 'carrito_id',
});

Producto.hasMany(Carrito_Producto, {
    as: 'Producto',
    foreignKey: 'producto_id',
});

export default Carrito_Producto