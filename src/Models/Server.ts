import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import dotenv from "dotenv"
import { Sequelize } from 'sequelize'
import mysql from 'mysql'
import myconn from 'express-myconnection'
import dbOptions from '../config/config'
import db from '../config/db/connection'
// Rutas
import userRoutes from '../config/routes/usuario.route'
import productRoutes from '../config/routes/producto.route'
import categoryRoutes from '../config/routes/categoria.route'
import cartRoutes from '../config/routes/carrito.route'

dotenv.config()
class Server {
 
    private app: Application
    private port: string
    private apiPaths = {
        usuarios: '/api/usuarios',
        categorias: '/api/categorias',
        productos: '/api/productos',
        carrito: '/api/carrito'
    }

    
    constructor() {
        this.app = express()
        this.port = process.env.PORT || '3050'

        // Metodos iniciales
        this.dbConnection()
        this.middlewares() 
        this.routes() 
    }

    routes(){
        const { usuarios, productos, categorias, carrito } = this.apiPaths
        this.app.use(usuarios, userRoutes)
        this.app.use(productos, productRoutes)
        this.app.use(categorias, categoryRoutes)
        this.app.use(carrito, cartRoutes)
    }

    middlewares(){
        this.app.use(cors())
        this.app.use(express.json())
        // this.app.use(myconn(mysql, this.Options, 'request'))
        this.app.use(express.static('public'))
    }

    dbConnection() {
        db
        .authenticate()
        .then(() => {
          console.log('Connection has been established successfully.');
        })
         .catch(err => {
         console.error('Unable to connect to the database:', err); 
        });
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en http://localhost:${this.port}`);
        })
    }
}

export default Server