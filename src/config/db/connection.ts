import { Sequelize } from 'sequelize'
import configDB from '../config'

const db = new Sequelize(configDB.database, configDB.username, configDB.password, {
    host: configDB.host,
    // port: 3308,
    dialect: 'mysql', //configDB.dialect
    logging: configDB.logging
});

export default db