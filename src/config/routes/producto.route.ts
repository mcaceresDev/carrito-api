import { Router } from "express";
import ProductoController from "../../Controllers/producto.controller";

const router = Router()
const productoController = new ProductoController

router.get('/all', productoController.getAll)
router.get('/byId/:id', productoController.getById)
router.get('/byCat/:id', productoController.getByCategory)
router.post('/', productoController.add)
router.put('/put/:id', productoController.update)
router.put('/delete/:id', productoController.delete)
// router.delete('/drop/:id', productoController.drop)



export default router