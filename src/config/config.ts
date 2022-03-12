import dotenv from "dotenv"
dotenv.config()

const dbOptions = {
    username: process.env.SERVER_DB_USER || "root",
    password: process.env.SERVER_DB_PASSWORD || "",
    database: process.env.SERVER_DB_NAME || "carrito",
    host:     process.env.SERVER_HOST || 'localhost',
    port:     Number(process.env.SERVER_PORT) || 3050,
    dialect:  process.env.SERVER_DB_DIALECT || 'mysql',
    dialectOptions: {
        bigNumberStrings: true
    },
    logging: true
};


export default dbOptions;