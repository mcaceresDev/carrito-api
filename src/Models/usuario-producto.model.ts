import { DataTypes } from "sequelize";
 import db from "../config/db/connection";

 const Usuario_Producto = db.define('', {
     fecha: DataTypes.DATE,
     usuario_id: DataTypes.INTEGER,
     producto_id: DataTypes.INTEGER
 })

 export default Usuario_Producto