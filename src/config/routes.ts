import express, {Application, Request, Response, NextFunction} from 'express'
const router  = express.Router();

// Clientes
router.get('/clientes', ClientesController.index);
router.get('/clientes/all', ClientesController.all);
router.get('/clientes/:id', ClientesController.byId);
router.post('/clientes/', ClientesController.add);
router.put('/clientes/:id', ClientesController.update);
// "Eliminacion"
router.put('/clientes/del/:id', ClientesController.delete);


export default router