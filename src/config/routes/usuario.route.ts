import { Router } from "express";
import UsuarioController from "../../Controllers/usuario.controler";

const router = Router()
const usuarioControler = new UsuarioController

router.get('/all', usuarioControler.getAll)
router.get('/byId/:id', usuarioControler.getById)
router.post('/', usuarioControler.add)
router.put('/put/:id', usuarioControler.update)
router.put('/delete/:id', usuarioControler.delete)



export default router