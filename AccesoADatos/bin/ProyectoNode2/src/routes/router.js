import { Router } from 'express';
const router = Router()

// Crear nuestras rutas para las diferentes paginas
router.get('/', (req, res) => {
    res.render('index', {title: 'Home'})
})

router.get('/login', (req, res) => {
    res.render('login', {title: 'Login'})
})

router.get('/registro', (req, res) => {
    res.render('registro', {title: 'Registro'})
})

export default router;