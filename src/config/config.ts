import dotenv from "dotenv"
dotenv.config()

const dbOptions = {
    //DB variables 
    username: process.env.SERVER_DB_USER || "root",
    password: process.env.SERVER_DB_PASSWORD || "root",
    database: process.env.SERVER_DB_NAME || "carrito",
    host:     process.env.SERVER_HOST || 'localhost',
    port:     Number(process.env.SERVER_PORT) || 3050,
    dialect:  process.env.SERVER_DB_DIALECT || 'mysql',
    dialectOptions: {
        bigNumberStrings: true
    },
    logging: true,
};

//Variables Acceso
export const authConfig = {
    secretKey: process.env.SECRET_KEY || "my_secret_key"
}

export default dbOptions;