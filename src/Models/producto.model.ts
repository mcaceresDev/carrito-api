import { DataTypes } from "sequelize";
import db from "../config/db/connection";
import Carrito_Producto from "./carrito-producto.model";
import Categoria from "./categoria.model";
import Usuario from "./usuario.model";

const Producto = db.define('producto', {
    id_producto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, // Automatically gets converted to SERIAL for postgres
        allowNull: false,
    },
    nombre: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
    },
    marca: {
        type: DataTypes.STRING
    },
    modelo: {
        type: DataTypes.STRING
    },
    precio: {
        type: DataTypes.STRING
    },
    stock: {
        type: DataTypes.INTEGER
    },
    estado: {
        type: DataTypes.STRING
    },
    categoria_id: {
        type: DataTypes.TINYINT
    },
    usuario_id: {
        type: DataTypes.TINYINT
    }

}, {
    modelName: 'producto',
    freezeTableName: true,  // La tabla tendra el mismo nombre que el modelo
    timestamps: false,
})

Producto.belongsTo(Usuario, {
    as: 'UsuarioProducto',
    foreignKey: 'usuario_id',
});


export default Producto