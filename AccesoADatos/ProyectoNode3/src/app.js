// Importar modulos necesarios
import express from "express";
import dotenv from "dotenv";
import { dirname, join } from 'path';
import { fileURLToPath } from "url";
import 

// Crear constante __dirname para devolver la ruta absoluta
const __dirname = dirname(fileURLToPath(import.meta.url));

dotenv.config();

// Creo app para ejecutar el framework
const app = express();

// Configurar motor de plantillas
app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views'));

// Montar el servidor
const port = process.env.PORT || 3000;
app.listen(port);
console.log('El servidor escucha en el puerto: ', port);