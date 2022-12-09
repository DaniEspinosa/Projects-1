import { Router } from 'express'
const router = Router()

// Ruta de las paginas
router.get('/', (req, res) => {
    res.render('index.ejs', {title: 'HOME'})
})

router.get('/Registro', (req, res) => {
    res.render('registro.ejs', {title: 'REGISTRO'})
})

router.get('/Login', (req, res) => {
    res.render('login.ejs', {title: 'LOGIN'})
})

router.get('/Crud', (req, res) => {
    res.render('crud.ejs', {title: 'CRUD'})
})

export default router