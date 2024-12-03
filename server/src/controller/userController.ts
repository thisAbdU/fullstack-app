import { Request, Response } from 'express';
import { pool } from '../config/db';

export const getUsers = async (req: Request, res: Response) => {
    try{
        const result = await pool.query('SELECT * FROM users');
        res.json(result.rows);
    } catch (error) {
        console.error('Error executing query', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const createUser = async (req: Request, res: Response) => {
    try {
        const { name, email } = req.body;
        const result = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING id', [name, email]);
        res.json({ id: result.rows[0].id });
    } catch (error) {
        console.error('Error executing query', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
