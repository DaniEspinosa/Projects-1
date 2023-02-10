import { createPool } from 'mysql2/promise'

export const pool = createPool ({
    host: 'localhost',
    user: 'root',
    password: 'Hola*12345',
    port: 33061,
    database: 'Node'
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

