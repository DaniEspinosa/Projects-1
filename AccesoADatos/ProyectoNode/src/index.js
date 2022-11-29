console.log('Mi primer nodejs');

// Requerir los modulos
import express from 'express'
import ejs from 'ejs'

import { dirname, join } from 'path'
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url))

// Iniciar modulos
const app = express()

// Configuraciones
    // Crear servidor
    app.listen(4000);
    console.log("El servidor funcina en el puerto 4000");

    // Configurar el motor de plantilla EJS
    app.set('views', join(__dirname, 'views'))
    app.set('view engine', 'ejs')


// Ruta de las paginas
app.get('/', (req, res) => {
    res.render('index', {title: 'A ver si funciona'})
})

app.get('/Registro', (req, res) => {
    res.render('registro')
})

app.get('/Login', (req, res) => {
    res.render('login')
})

app.get('/Crud', (req, res) => {
    res.render('crud')
})

