console.log('Mi primer nodejs');

// Requerir los modulos
import express from 'express'
import ejs from 'ejs'

import indexRoutes from './routes/index.js'

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

    // Configurar routes
    app.use(indexRoutes)

    //Configurar estilos CSS
    app.use(express.static(join(__dirname, 'public')))
    



