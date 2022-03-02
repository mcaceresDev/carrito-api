import express, { Application, Request, Response } from 'express'
import dotenv from "dotenv"
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

        this.routes()
    }

    routes(){
        const { clientes, productos } = this.apiPaths
        this.app.use(clientes, clientRoutes)
        this.app.use(productos, productRoutes)
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en http://localhost:${this.port}`);
        })
    }
}

export default Server