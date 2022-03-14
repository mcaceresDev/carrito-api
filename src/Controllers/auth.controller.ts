import { Request, Response } from 'express'
import jwt from 'jsonwebtoken';
import Usuario from "../Models/usuario.model";
import { respuesta, serverError, notFoundError, okResp, sequelizeError } from '../Models/response.model'
import { authConfig } from '../config/config';

class AuthController {

    signIn(req: Request, res: Response) {

        //     let {email, password} = req.body

        //     User.findOne({
        //         where: {
        //             email
        //         }
        //     }).then(user => {
        //         if(!user){
        //             res.status(404) //y mandamos mensaje de que el correo es incorrecto
        //         }
        //         else{
        //             if(user.password === password){
        //                 //devolvemos el token
        //                 let token = jwt.sign({usuario:user}, authConfig.secret, {
        //                     expiresIn: "7d"
        //                 });

        //                 res.json({
        //                     user: user,
        //                     access_token: token
        //                 })	
        //             }
        //             else{
        //                 res.status(401)
        //             }

        //         }
        //     }).catch(err => {
        //         res.status(500)
        //     })


    }

    signUp(req: Request, res: Response) {
        let success = {}

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

        Usuario.create(newUser).then(user => {
            let token = jwt.sign({ usuario: user }, authConfig.secretKey, {
                expiresIn: "5d"
            });
            res.json({success : {
                usuario: user,
                token: token
            }});
        }).catch(err => {
            res.status(500).json(err)
        })

    }

//     try {
//     const {
//         primer_nombre, segundo_nombre,
//         primer_apellido, segundo_apellido,
//         telefono, email, password, estado,
//         rol_id, carrito_id } = req.body

//     const newUser = {
//         primer_nombre,
//         segundo_nombre,
//         primer_apellido,
//         segundo_apellido,
//         telefono,
//         email,
//         password,
//         estado,
//         rol_id,
//         carrito_id
//     }
//     const data = await Usuario.create(newUser);

//     if (data) {
//         this.rpta = new okResp
//         this.rpta.message = `Registro creado con éxito`;
//     }

//     return res.send(this.rpta)

// } catch (Err: sequelizeError | any) {
//     let response = new serverError()
//     response.error = Err
//     return res.send(response);
// }
}



export default AuthController