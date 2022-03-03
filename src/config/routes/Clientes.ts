import { Router } from "express";
import { Request, Response } from "express";
import ClientesController from "../../Controllers/Clientes.controler";

const router = Router()
const clienteControler = new ClientesController

router.get('/all', clienteControler.getAll)
router.get('/byId', clienteControler.getById)
router.post('/', clienteControler.getById)
router.get('/put/:id', clienteControler.getById)
router.get('/delete/:id', clienteControler.getById)



export default router