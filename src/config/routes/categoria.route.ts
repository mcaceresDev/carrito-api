import { Router } from "express";
import CategoriaController from "../../Controllers/categoria.controller";

const router = Router()
const categoriaController = new CategoriaController

router.get('/all', categoriaController.getAll)
router.get('/byId', categoriaController.getById)
router.post('/', categoriaController.add)
router.put('/put/:id', categoriaController.update)
router.delete('/delete/:id', categoriaController.delete)



export default router