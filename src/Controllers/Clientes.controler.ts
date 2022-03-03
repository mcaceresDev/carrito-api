import express, { Application, Request, Response, NextFunction } from 'express'
import Cliente from '../Models/cliente.model'
import { resp, serverError, notFoundError, forbiddenError } from '../Models/response.model'

class ClientesController {

    // Obtener todos los registros de la tabla clientes
    getAll = async (req: Request, res: Response) => {
        let rpta = new resp

        try {
            const data = await Cliente.findAll()

            if (data.length > 0) {
                rpta.message = `Mostrando ${data.length} registros`;
                rpta.rows = data;
            } else {
                rpta = new notFoundError()
            }
            return res.send(rpta);
            // return res.json(rpta);
            
        } catch (error) {
            console.log(error);
            throw error
        }
    }

    //Obtener cliente por su Id
    getById = async(req: Request, res: Response) => {
        const {id} = req.params
        let rpta = new forbiddenError

        const cliente = await Cliente.findByPk(id)

        res.json({
            rpta
        })
    }

}

export default ClientesController