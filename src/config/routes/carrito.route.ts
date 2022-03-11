import { Router } from "express";
import CarritoController from "../../Controllers/carrito.controller";

const router = Router()
const carritoController = new CarritoController

router.get('/all/:id', carritoController.getAll)
router.post('/fill', carritoController.fillCart)
router.delete('/prod/:id', carritoController.delProd)
router.delete('/prodcart/:id', carritoController.delCart)
// router.put('/put/:id', categoriaController.update)
// router.delete('/delete/:id', categoriaController.delete)



export default router