import dotenv from "dotenv"
import Server from "./Models/Server"

dotenv.config()
const server = new Server
server.listen()






















// import express, {Application, Request, Response, NextFunction} from 'express'
// import router from './config/routes'  // llamo el archivo de rutas
// import dbOptions from './config/config'
// let cors    = require('cors');
// let myconn  = require('express-myconnection');
// let app     = express();
// let mysql   = require('mysql'); 

// // const { ...dbOptions } = require('./config/database') // Conexion con base de datos 
// // require('dotenv').config() // leer datos de archivo .env


// // middlewares
// app.use(cors());
// app.use(express.json());
// app.use(myconn(mysql, dbOptions, 'request'))
// app.use('/api', router); 	// declaro el uso de mis rutas

// const PORT = process.env.APP_PORT || 3050; // puerto declarado en archivo .env

// app.listen(PORT, ()=> {
// 	console.log(`http://localhost:${PORT}/`)// retorno url con puerto

// }); 












// import dotenv from "dotenv"
// import express, {Application, Request, Response, NextFunction} from 'express'

// dotenv.config()
// const app:Application = express();

// app.get('/', (req:Request, res:Response) => {
//     console.log(process.env);
    
//     res.send('hello')
// });

// app.listen(3050, () => console.log(`server running at http://localhost:${3050}`))

