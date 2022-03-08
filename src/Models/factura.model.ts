import { DataTypes } from "sequelize/types";
import db from "../config/db/connection";

const Factura = db.define('Factura', {
    fecha: DataTypes.DATE,
    iva_total: DataTypes.DECIMAL,
    total: DataTypes.DECIMAL,
    usuario_cli_id: DataTypes.INTEGER
})

export default Factura