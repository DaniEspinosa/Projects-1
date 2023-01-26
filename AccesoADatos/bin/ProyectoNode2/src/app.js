// Importar los modulos necesarios

import express from 'express';
import ejs from 'ejs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import indexRoutes from './routes/router.js'

const __dirname = dirname(fileURLToPath(import.meta.url));

// Crear variable para llamar express
const app = express();

// Configurar Router
app.use(indexRoutes)

// Crear el servidor
const port = process.env.PORT || 3000;
app.listen(port);
console.log('El servidor escucha en el puerto', port);

// Configurar el motor de plantillas
app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views'));
console.log(join(__dirname, 'views'))

// Configurar Public
app.use(express.static(join(__dirname, 'public')))

// Crear nuestras rutas para las diferentes paginas
app.get('/', (req, res) => {
    res.render('index')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/registro', (req, res) => {
    res.render('registro')
})