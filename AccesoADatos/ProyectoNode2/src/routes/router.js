import { Router } from 'express';
import { pool } from '../db.js';
import { PrismaClient } from '@prisma/client'
import { vistaHome, vistaLogin, vistaRegistro, postMetodo } from '../controller/indexRoutex.js';

const prisma = new PrismaClient()
const router = Router()

// Crear nuestras rutas para las diferentes paginas
router.get('/', vistaHome)
router.get('/login', vistaLogin)
router.get('/registro', vistaRegistro)
router.post('/', postMetodo)

router.get('/daniel', async (req, res) => {
    await prisma.Users.create({
        data: {
            name: "Daniel"
        }
    })
    console.log(await prisma.Users.findMany())
})




export default router;