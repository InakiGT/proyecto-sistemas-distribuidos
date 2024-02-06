const express = require('express');
const minesRouter = require('./mines.router');

const router = express.Router();

const routesApi = (app) => {
    app.use('/api/v1', router);
    
    router.use('/mines', minesRouter);
}

module.exports = routesApi;