import { Router } from "express";
import { Request, Response } from "express";
import UsuarioController from "../../Controllers/usuario.controler";

const router = Router()
const usuarioController = new UsuarioController

router.get('/all', usuarioController.getAll)
router.get('/byId', usuarioController.getById)
router.post('/', usuarioController.getById)
router.get('/put/:id', usuarioController.getById)
router.get('/delete/:id', usuarioController.getById)



export default router