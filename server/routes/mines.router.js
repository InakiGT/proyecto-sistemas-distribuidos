const express = require('express');
const connectDB = require('../database');


const router = express.Router();

router.get('/', async (_, res) => {
    try {
        const dbConn = await connectDB();
        const data = (await dbConn.execute('SELECT * FROM mines')).rows;
        
        console.log(data);
        res.status(200).json({
            statusMsg: 'OK',
            data,
        });
    } catch(err) {
        console.error(err);
        
        res.status(500).json({
            statusMsg: 'Internal Server Error',
            data: null,
        });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const dbConn = await connectDB();
        const { id } = req.params;
        const data = (await dbConn.execute('SELECT * FROM mines WHERE id = :id', id)).rows;
        
        console.log(data);
        res.status(200).json({
            statusMsg: 'OK',
            data,
        });
    } catch(err) {
        console.error(err);
        
        res.status(500).json({
            statusMsg: 'Internal Server Error',
            data: null,
        });
    }
});

router.post('/', async (req, res) => {
    try {
        const dbConn = await connectDB();
        const mine = req.body;
        
        await dbConn.execute('INSERT INTO mines (id, name, diamond_type, location) VALUES (:id, :name, :diamond_type, :location)', mine);
        res.status(201).json({
            statusMsg: 'Created',
            data: mine,
        });
    } catch(err) {
        console.error(err);
        
        res.status(500).json({
            statusMsg: 'Internal Server Error',
            data: null,
        });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const dbConn = await connectDB();
        const { id } = req.params;
        const data = req.body;
        data.id = id;
        
        await dbConn.execute('UPDATE mines SET name = :name, diamond_type = :diamond_type, location = :location WHERE id = :id', data);
        
        res.status(200).json({
            statusMsg: 'OK',
            data: data,
        });
    } catch(err) {
        console.error(err);
        
        res.status(500).json({
            statusMsg: 'Internal Server Error',
            data: null,
        });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const dbConn = await connectDB();
        const { id } = req.params;

        await dbConn.execute('DELETE FROM mines WHERE id = :id', id);
        res.status(200).json({
            statusMsg: 'OK',
            data: null,
        });
    } catch(err) {
        console.error(err);
    }
});

module.exports = router;