import dotenv from "dotenv"
dotenv.config()

let dbOptions = {
    username: process.env.SERVER_DB_USER || "root",
    password: process.env.SERVER_DB_PASSWORD || "",
    database: process.env.SERVER_DB_NAME || "citecn",
    host: process.env.SERVER_HOST || 'localhost',
    port: process.env.SERVER_PORT || 3306,
    dialect: process.env.SERVER_DB_DIALECT || "mysql",
    dialectOptions: {
        bigNumberStrings: true
    },
    logging: true
};


export default dbOptions;