import { Request, Response } from 'express'
import Producto from '../Models/producto.model'
import { respuesta, serverError, notFoundError, okResp } from '../Models/response.model'

class ProductoController {

    rpta: respuesta = {
        message: "Sin respuesta",
        status: 0
    }

    // Obtener todos los registros de la tabla producto
    getAll = async (req: Request, res: Response) => {

        try {
            const data = await Producto.findAll()

            if (data.length > 0) {
                this.rpta = new okResp
                this.rpta.message = `Mostrando ${data.length} registros`;
                this.rpta.rows = data;
            } else {
                this.rpta = new notFoundError()
            }
            return res.send(this.rpta);
            // return res.json(rpta);

        } catch (error: any) {
            this.rpta = new serverError()
            console.log(error);
            throw error
        }
    }

    //Obtener producto por su Id
    getById = async (req: Request, res: Response) => {
        const { id } = req.params

        try {
            const data = await Producto.findAll({
                where: {
                    id_producto: id,
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

        } catch (error: any) {
            this.rpta = new serverError()
            console.log(error);
            throw error
        }
    }

    //crear producto
    add = async (req: Request, res: Response) => {
        try {
            const {
                nombre, descripcion,
                marca, modelo,
                precio, stock,
                estado, categoria_id } = req.body

            const newProduct = {
                nombre,
                descripcion,
                marca,
                modelo,
                precio,
                stock,
                estado,
                categoria_id
            }
            const data = await Producto.create(newProduct);

            if (data) {
                this.rpta = new okResp
                this.rpta.message = `Registro creado con éxito`;
            }

            return res.send(this.rpta)

        } catch (error: any) {
            console.log(error);
            throw error;
        }
    }

    // actualizar producto
    update = async (req: Request, res: Response) => {

        try {
            const id_producto = req.params.id;
            //datos a modificar
            const {
                nombre, descripcion,
                marca, modelo,
                precio, stock,
                estado, categoria_id } = req.body

            const newProduct = {
                nombre,
                descripcion,
                marca,
                modelo,
                precio,
                stock,
                estado,
                categoria_id
            }

            let data = await Producto.update(newProduct, {
                where: {
                    id_producto
                }
            });

            if (data[0] == 1) { // si es 1 se realizo el cambio
                this.rpta = new okResp
                this.rpta.message = `Datos Actualizados`;
            }

            return res.send(this.rpta);

        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    // eliminacion logica
    delete = async (req: Request, res: Response) => {

        try {
            const id_producto = req.params.id;
            let data = await Producto.update({
                estado: 0
            }, {
                where: { id_producto }
            });

            if (data) {
                this.rpta = new okResp
                this.rpta.message = `Registro Eliminado`;
            }

            return res.send(this.rpta);

        } catch (error) {
            console.log(error);
            return res.send(this.rpta);
        }
    }

    // eliminacion fisica
    drop = async (req: Request, res: Response) => {
        try {
            const id_producto = req.params.id

            let data = await Producto.destroy({
                where: { id_producto }
            });

            if (data) {
                this.rpta = new okResp
                this.rpta.message = `Registro Eliminado Definitivamente`;
            }

            return res.send(this.rpta);
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }

    // ---------------------------------------------------------
}

export default ProductoController