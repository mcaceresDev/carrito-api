import express, { Application, Request, Response, NextFunction } from 'express'
<<<<<<< HEAD
import Usuario from '../Models/usuario.model'
import { respuesta, serverError, notFoundError, forbiddenError, okResp } from '../Models/response.model'
import Carrito from '../Models/carrito.model'

class UsuarioController {
=======
import Usuario, { UserIModel } from '../Models/usuario.model'
import { respuesta, serverError, notFoundError, forbiddenError, okResp } from '../Models/response.model'

class UsuarioController {

>>>>>>> 6d33f12d65aa7e0a1a8ee70627b6f5827becddf6
    rpta: respuesta = {
        message: "Sin respuesta",
        status: 0
    }

    // Obtener todos los registros de la tabla usuario
    getAll = async (req: Request, res: Response) => {

        try {
            const data = await Usuario.findAll({
                include: {
                    model: Carrito,
                    as: "Carrito",
                }
            })

            if (data.length > 0) {
                this.rpta.message = `Mostrando ${data.length} registros`;
                this.rpta.rows = data;
            } else {
                this.rpta = new notFoundError()
            }
            return res.send(this.rpta);
            // return res.json(rpta);
<<<<<<< HEAD
            
        } catch (error) {
=======

        } catch (error: any) {
            this.rpta = new serverError()
>>>>>>> 6d33f12d65aa7e0a1a8ee70627b6f5827becddf6
            console.log(error);
            throw error
        }
    }

<<<<<<< HEAD
    //Obtener usuario por su Id
    getById = async(req: Request, res: Response) => {
=======
    //Obtener cliente por su Id
    getById = async (req: Request, res: Response) => {
>>>>>>> 6d33f12d65aa7e0a1a8ee70627b6f5827becddf6
        const { id } = req.params

        try {
            const data = await Usuario.findAll({
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

        } catch (error: any) {
            this.rpta = new serverError()
            console.log(error);
            throw error
        }
    }

    //crear usuarios
    add = async (req: Request, res: Response) => {
        try {
            const {
                primer_nombre, segundo_nombre,
                primer_apellido, segundo_apellido,
                telefono, email, password, estado,
                rol_id, carrito_id } = req.body

            const newUser = {
                primer_nombre,
                segundo_nombre,
                primer_apellido,
                segundo_apellido,
                telefono,
                email,
                password,
                estado,
                rol_id,
                carrito_id
            }
            const data = await Usuario.create(newUser);

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

    // actualizar usuarios
    update = async (req: Request, res: Response) => {

        try {
            const id_usuario = req.params.id;
            //datos a modificar
            const {
                primer_nombre, segundo_nombre,
                primer_apellido, segundo_apellido,
                telefono, rol_id } = req.body

            const newUser = {
                primer_nombre,
                segundo_nombre,
                primer_apellido,
                segundo_apellido,
                telefono,
                rol_id
            }

            let data = await Usuario.update(newUser, {
                where: {
                    id_usuario
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

    // actualizacion de contraseña
    updatePass = async (req: Request, res: Response) => {

        try {
            const id_usuario = req.params.id;
            const password = req.body.pass;

            let data = await Usuario.update({
                password
            },
                {
                    where: {
                        id_usuario
                    }
                });

            if (data[0] == 1) { // si es 1 se realizo el cambio
                this.rpta.message = `Contraseña Actualizada`;
            }
            return res.send(this.rpta);

        } catch (error) {
            console.log(error);
            throw error
        }
    }

    // elimincion logica
    delete = async (req: Request, res: Response) => {

        try {
            const id_usuario = req.params.id;
            let data = await Usuario.update({
                estado: 0
            }, {
                where: { id_usuario }
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
            const id_usuario = req.params.id

            let data = await Usuario.destroy({
                where: { id_usuario }
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
<<<<<<< HEAD

=======
>>>>>>> 6d33f12d65aa7e0a1a8ee70627b6f5827becddf6
}

export default UsuarioController