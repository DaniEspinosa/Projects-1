import { Router } from 'express';

const router = Router();


// Creamos las rutas GET
router.get('/', vistaHome);
router.get('/login', vistaLogin);
router.get('/registro', vistaRegistro);


