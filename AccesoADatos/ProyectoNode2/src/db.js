import { createPool } from 'mysql2/promise'

export const pool = createPool ({
    host: 'localhost',
    user: 'root',
    password: 'Hola*12345',
    port: 33061,
    database: 'Node'
})