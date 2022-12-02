import { Router } from 'express'
const router = Router()

// Ruta de las paginas
router.get('/', (req, res) => {
    res.render('index', {title: 'HOME'})
})

router.get('/Registro', (req, res) => {
    res.render('registro', {title: 'REGISTRO'})
})

router.get('/Login', (req, res) => {
    res.render('login', {title: 'LOGIN'})
})

router.get('/Crud', (req, res) => {
    res.render('crud', {title: 'CRUD'})
})

export default router