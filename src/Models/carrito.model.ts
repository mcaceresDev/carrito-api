import { DataTypes } from "sequelize/types";
import db from "../config/db/connection";

const Carrito = db.define('Carrito', {
    fecha_creacion: {
        type: DataTypes.DATE
    }
})

export default Carrito