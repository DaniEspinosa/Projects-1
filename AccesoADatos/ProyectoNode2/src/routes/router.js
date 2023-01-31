import { Router } from 'express';
import { pool } from '../db.js';
import { vistaHome, vistaLogin, vistaRegistro } from '../controller/indexRoutex.js';
const router = Router()

// Crear nuestras rutas para las diferentes paginas
router.get('/', vistaHome)
router.get('/login', vistaLogin)
router.get('/registro', vistaRegistro)

router.post('/', async (req, res) => {
    const [result] = await pool.query('SELECT 1+1 as result')
    res.json(result[0])
})

export default router;