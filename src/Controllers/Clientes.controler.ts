import express, { Application, Request, Response, NextFunction } from 'express'
import { resp, notFoundError, forbiddenError } from '../Models/response.model'

class ClientesController {
    
    // Obtener todos los registros de la tabla clientes
    getAll = (req: Request, res: Response) => {
        let rpta:notFoundError = new notFoundError
    
        res.json({
            rpta 
        })
    } 
    
    //Obtener cliente por su Id
    getById = (req: Request, res: Response) => {
        let rpta = new forbiddenError
    
        res.json({
            rpta 
        })
    } 

}

export default ClientesController