import { Router } from "express";
import CategoriaController from "../../Controllers/categoria.controller";

const router = Router()
const categoriaController = new CategoriaController

router.get('/all', categoriaController.getAll)
router.get('/byId/:id', categoriaController.getById)
router.post('/', categoriaController.add)
router.put('/put/:id', categoriaController.update)
router.put('/delete/:id', categoriaController.delete)
// router.delete('/drop/:id', categoriaController.drop)



export default router