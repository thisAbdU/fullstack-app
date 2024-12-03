import { Pool } from 'pg'; 
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

export const pool = new Pool({

    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT),
});

pool.on('error', (err) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
});

pool.on('connect', (client) => {
    client.on('notice', (msg) => console.warn('notice:', msg));
    client.on('error', (err) => console.error('error:', err));
});
