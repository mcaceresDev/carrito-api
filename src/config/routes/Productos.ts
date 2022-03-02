import { Router } from "express";
import ProductosController from "../../Controllers/Productos.controller";

const router = Router()
const productoController = new ProductosController

router.get('/all', productoController.getAll)
router.get('/byId', productoController.getById)
router.post('/', productoController.getById)
router.put('/put/:id', productoController.getById)
router.delete('/delete/:id', productoController.getById)


export default router