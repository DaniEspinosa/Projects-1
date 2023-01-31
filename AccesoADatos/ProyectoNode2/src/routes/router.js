import { Router } from 'express';
import { pool } from '../db.js';
import { vistaHome, vistaLogin, vistaRegistro, postMetodo } from '../controller/indexRoutex.js';
const router = Router()

// Crear nuestras rutas para las diferentes paginas
router.get('/', vistaHome)
router.get('/login', vistaLogin)
router.get('/registro', vistaRegistro)
router.post('/', postMetodo)

export default router;