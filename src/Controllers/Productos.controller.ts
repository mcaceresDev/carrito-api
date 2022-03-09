import { Request, Response } from 'express'
import { respuesta, notFoundError, forbiddenError } from '../Models/response.model'

class ProductosController {
    
    // Obtener todos los registros de la tabla productos
    getAll = (req: Request, res: Response) => {
        let rpta:notFoundError = new notFoundError
    
        res.json({
            rpta 
        })
    } 
    
    //Obtener producto por su Id
    getById = (req: Request, res: Response) => {
        let rpta = new forbiddenError
    
        res.json({
            rpta 
        })
    } 

}

export default ProductosController