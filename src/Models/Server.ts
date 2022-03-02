import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import dotenv from "dotenv"
import myconn from 'express-myconnection'
import mysql from 'mysql'
import dbOptions from '../config/config'
// Rutas
import clientRoutes from '../config/routes/Clientes'
import productRoutes from '../config/routes/Productos'

dotenv.config()
class Server {

    private app: Application
    private port: string
    private apiPaths = {
        clientes: '/api/clientes',
        productos: '/api/productos'
    }

    constructor() {
        this.app = express()
        this.port = process.env.PORT || '3050'

        // Metodos iniciales
        this.middlewares()
        this.routes()
    }

    routes(){
        const { clientes, productos } = this.apiPaths
        this.app.use(clientes, clientRoutes)
        this.app.use(productos, productRoutes)
    }

    middlewares(){
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(myconn(mysql, dbOptions, 'request'))
        this.app.use(express.static('public'))
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en http://localhost:${this.port}`);
        })
    }
}

export default Server