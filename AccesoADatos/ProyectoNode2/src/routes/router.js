import { Router } from 'express';
import { vistaHome, vistaLogin, vistaRegistro } from '../controller/indexRoutex.js';
const router = Router()

// Crear nuestras rutas para las diferentes paginas
router.get('/', vistaHome)

router.get('/login', vistaLogin)

router.get('/registro', vistaRegistro)

export default router;