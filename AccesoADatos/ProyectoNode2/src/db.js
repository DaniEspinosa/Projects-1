import { createPool } from 'mysql2/promise'
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

export const pool = createPool ({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE
})

async function connectToDb() {
    try {
        const connection = await pool.getConnection()
        console.log('Conectado a la Base de Datos')
    } catch (error) {
        console.log('El error de conectividad es: ', error)
    }
}

connectToDb()

