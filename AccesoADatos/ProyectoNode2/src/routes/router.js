import { Router } from 'express';
import { pool } from '../db.js';
import { PrismaClient } from '@prisma/client'
import bcryptjs from 'bcryptjs'
import { vistaHome, vistaLogin, vistaRegistro, postMetodo } from '../controller/indexRoutex.js';
import session from 'express-session';

const prisma = new PrismaClient()
const router = Router()

// Crear nuestras rutas para las diferentes paginas
router.get('/', vistaHome)
router.get('/login', vistaLogin)
router.get('/registro', vistaRegistro)
router.post('/', postMetodo)

router.use(session({
    secret: '12345',
    resave: true,
    saveUninitialized: true
}))

router.post('/auth', async (req, res) => {
    const user = req.body.user;
    const pass = req.body.pass;
    if (user && pass) {
        try {
            const [results] = await pool.query('SELECT * from Users where user = ?', [user]);
            if (results.length == 0 || !(await bcryptjs.compare(pass, results[0].pass))) {
                res.send('Usuario o contraseña incorrectos')
            } else {
                res.send('Login correcto')
            }
        } catch (error) {

        }
    }
})

router.post('/registro', async (req, res) => {
    const name = req.body.name;
    const surname = req.body.surname;
    const user = req.body.user;
    const email = req.body.email;
    const pass = req.body.pass;
    let passwordHash = await bcryptjs.hash(pass, 8);
    pool.query('INSERT INTO Users SET ?', { name: name, surname: surname, email: email, pass: passwordHash, user: user, })
        .then(() => {
            res.send('Usuario insertado correctamente')
        })
        .catch((error) => {
            console.log(error)
        })
});

router.get('/daniel', async (req, res) => {
    await prisma.Users.create({
        data: {
            name: "Nacho"
        }
    })
    console.log(await prisma.Users.findMany())
})

export default router;