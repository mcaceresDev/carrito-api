import { Request, Response } from 'express'
import { respuesta, serverError, notFoundError, forbiddenError, okResp } from '../Models/response.model'
// modelos
import Producto from '../Models/producto.model'
import Carrito from '../Models/carrito.model'
import Carrito_Producto from '../Models/carrito-producto.model'
import Usuario from '../Models/usuario.model'

export interface carrito_producto {
    carrito_id: number,
    producto_id: number,
    cantidad: number,
    precio: number,
    iva: number,
    total: number,
    fecha_agregado: Date
}
// TODO
class FacturaController {

    rpta: respuesta = {
        message: "Sin respuesta",
        status: 0
    }

    // Obtener todos los registros de un carrito 
    getAll = async (req: Request, res: Response) => {
        const { id } = req.params

        try {
            const data = await Carrito.findAll({
                include: [{
                    model: Carrito_Producto,
                    as: "Carrito_Producto",
                    include: [{
                        model: Producto,
                        as: "Producto",
                        include: [{
                            model: Usuario,
                            as: "UsuarioProducto"
                        }]
                    }]
                }],
                where: {
                    id_carrito: id
                }
            })

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


    //crear carrito
    add = async (req: Request, res: Response) => {
        try {
            const newCart = {
                fech_creacion: new Date()
            }
            const data = await Carrito.create(newCart);

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

    //llenar carrito
    fillCart = async (req: Request, res: Response) => {
        const {
            carrito_id,
            producto_id,
            cantidad,
            precio,
        } = req.body

        let iva   = (precio * 0.15) * cantidad 
        let total = (cantidad*precio) + iva
        let fecha_agregado = new Date()

        try {
            const newCartProd = {
                carrito_id,
                producto_id,
                cantidad,
                precio,
                iva,
                total,
                fecha_agregado
            }

            const data = await Carrito_Producto.create(newCartProd);

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

    // elimincion de producto
    delProd = async (req: Request, res: Response) => {

        try {
            const producto_id = req.params.id;

            let data = await Carrito_Producto.destroy( {
                where: { producto_id }
            });

            if (data) {
                this.rpta = new okResp
                this.rpta.message = `Registro Eliminado`;
            }

            return res.send(this.rpta);

        } catch (error) {
            console.log(error);
            return res.json(this.rpta);
        }
    }

    // vaciar carrito
    delCart = async (req: Request, res: Response) => {

        try {
            const carrito_id = req.params.id;

            let data = await Carrito_Producto.destroy( {
                where: { carrito_id }
            });

            if (data) {
                this.rpta = new okResp
                this.rpta.message = `Registro Eliminado`;
            }

            return res.send(this.rpta);

        } catch (error) {
            console.log(error);
            return res.json(this.rpta);
        }
    }

    // // eliminacion fisica
    // drop = async (req: Request, res: Response) => {
    //     try {
    //         const id_categoria = req.params.id

    //         let data = await Categoria.destroy({
    //             where: { id_categoria }
    //         });

    //         if (data) {
    //             this.rpta = new okResp
    //             this.rpta.message = `Registro Eliminado Definitivamente`;
    //         }

    //         return res.send(this.rpta);
    //     }
    //     catch (error) {
    //         console.log(error);
    //         throw error;
    //     }
    // }

    // ---------------------------------------------------------
}

export default FacturaController