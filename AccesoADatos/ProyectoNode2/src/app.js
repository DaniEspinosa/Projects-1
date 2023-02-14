// Importar los modulos necesarios
import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import indexRoutes from './routes/router.js'
import session from 'express-session'
import dotenv from 'dotenv'
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Crear variable para llamar express
const app = express();

// Configurar body-parser para coger datos del body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configurar Router
app.use(indexRoutes)

// Configurar urlencode para coger datos del formulario login
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(session({
    secret: '12345',
    resave: true,
    saveUninitialized: true
}))

// Crear el servidor
const port = process.env.PORT || 2000;
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

app.get('/c', (req, res) => {
    req.session.usuario = "Mauri";
    req.session.rol = "Administrador";
    req.session.visitas = req.session.visitas ? ++req.session.visitas : 1;
    res.send(`El usuario <Strong>${req.session.usuario}</Strong> con el privilegio de <Strong>${req.session.rol}</Strong> ha visitado la web <Strong>${req.session.visitas}</Strong>`)
})