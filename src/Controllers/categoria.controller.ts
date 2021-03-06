import { Request, Response } from 'express'
import { respuesta, serverError, notFoundError, forbiddenError, okResp, sequelizeError } from '../Models/response.model'
// modelos
import Categoria from '../Models/categoria.model'
import Producto from '../Models/producto.model'

class CategoriaController {

    rpta: respuesta = {
        message: "Sin respuesta",
        status: 0
    }

    // Obtener todos los registros de la tabla categorias
    getAll = async (req: Request, res: Response) => {

        try {
            const data = await Categoria.findAll()

            if (data.length > 0) {
                this.rpta = new okResp
                this.rpta.message = `Mostrando ${data.length} registros`;
                this.rpta.rows = data;
            } else {
                this.rpta = new notFoundError()
            }
            return res.send(this.rpta);
            // return res.json(rpta);

        } catch (Err:sequelizeError | any) {
            let response = new serverError()
            response.error = Err
            return res.send(response);
        }
    }

    //Obtener categoria por su Id
    getById = async (req: Request, res: Response) => {
        const { id } = req.params

        try {
            const data = await Categoria.findAll({
                where: {
                    id_usuario: id,
                    estado: 1
                }
            })
            if (data.length > 0) {
                this.rpta = new okResp
                this.rpta.message = `Mostrando ${data.length} registros`;
                this.rpta.rows = data;
            }
            else {
                this.rpta = new notFoundError
            }
            return res.send(this.rpta);

        } catch (Err:sequelizeError | any) {
            let response = new serverError()
            response.error = Err
            return res.send(response);
        }
    }

    //crear categorias
    add = async (req: Request, res: Response) => {
        try {
            const { nombre, descripcion } = req.body
            const newCategory = {
                nombre,
                descripcion
            }
            const data = await Categoria.create(newCategory);

            if (data) {
                this.rpta = new okResp
                this.rpta.message = `Registro creado con ??xito`;
            }

            return res.send(this.rpta)

        } catch (Err:sequelizeError | any) {
            let response = new serverError()
            response.error = Err
            return res.send(response);
        }
    }

    // actualizar categoria
    update = async (req: Request, res: Response) => {

        try {
            const id_categoria = req.params.id;
            //datos a modificar
            const { nombre, descripcion } = req.body

            const newCategory = {
                nombre,
                descripcion
            }

            let data = await Categoria.update(newCategory, {
                where: {
                    id_categoria
                }
            });

            if (data[0] == 1) { // si es 1 se realizo el cambio
                this.rpta = new okResp
                this.rpta.message = `Datos Actualizados`;
            }

            return res.send(this.rpta);

        } catch (Err:sequelizeError | any) {
            let response = new serverError()
            response.error = Err
            return res.send(response);
        }
    }

    // elimincion logica
    delete = async (req: Request, res: Response) => {

        try {
            const id_categoria = req.params.id;
            let data = await Categoria.update({
                estado: 0
            }, {
                where: { id_categoria }
            });

            if (data) {
                this.rpta = new okResp
                this.rpta.message = `Registro Eliminado`;
            }

            return res.send(this.rpta);

        } catch (Err:sequelizeError | any) {
            let response = new serverError()
            response.error = Err
            return res.send(response);
        }
    }

    // eliminacion fisica
    drop = async (req: Request, res: Response) => {
        try {
            const id_categoria = req.params.id

            let data = await Categoria.destroy({
                where: { id_categoria }
            });

            if (data) {
                this.rpta = new okResp
                this.rpta.message = `Registro Eliminado Definitivamente`;
            }

            return res.send(this.rpta);
        }
        catch (Err:sequelizeError | any) {
            let response = new serverError()
            response.error = Err
            return res.send(response);
        }
    }

    // ---------------------------------------------------------
}

export default CategoriaController