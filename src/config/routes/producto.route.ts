import { Router } from "express";
import { Request, Response } from "express";
import ProductoController from "../../Controllers/producto.controller";

const router = Router()
const productoController = new ProductoController

router.get('/all', productoController.getAll)
router.get('/byId', productoController.getById)
router.post('/', productoController.add)
router.get('/put/:id', productoController.update)
router.get('/delete/:id', productoController.delete)



export default router