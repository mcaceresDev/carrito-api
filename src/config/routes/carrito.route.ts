import { Router } from "express";
import CarritoController from "../../Controllers/carrito.controller";

const router = Router()
const carritoController = new CarritoController

router.get('/all', carritoController.getAll)
// router.get('/byId', categoriaController.getById)
// router.post('/', categoriaController.add)
// router.put('/put/:id', categoriaController.update)
// router.delete('/delete/:id', categoriaController.delete)



export default router