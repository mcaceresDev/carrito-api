import { DataTypes } from "sequelize";
import db from "../config/db/connection";
import Carrito from "./carrito.model";

const Usuario = db.define('usuario', {
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, // Automatically gets converted to SERIAL for postgres
        allowNull: false,
    },
    primer_nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    segundo_nombre: {
        type: DataTypes.STRING,
    },
    primer_apellido: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    segundo_apellido: {
        type: DataTypes.STRING
    },
    telefono: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    estado: {
        type: DataTypes.TINYINT,
        allowNull: false,
    },
    rol_Id: {
        type: DataTypes.TINYINT,
        allowNull: false,
    },
    carrito_Id: DataTypes.TINYINT
}, {
    // sequelize,
    modelName: 'Usuario',
    freezeTableName: true,  // La tabla tendra el mismo nombre que el modelo
    timestamps: false,
})

//Carrito(tabla A) -> Usuario(tabla B) 1:1  La llave foranea definida en B
Carrito.hasOne(Usuario, {
    foreignKey: 'carrito_id',
    as: 'Usuario'
});

//Usuario(tabla A) -> Carrito(tabla B) 1:1  La llave foranea definida en A
Usuario.belongsTo(Carrito, {
    foreignKey: 'carrito_id',
    as: 'Carrito'
})


export default Usuario