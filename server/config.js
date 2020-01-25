const morgan = require('morgan');
const express = require('express');
const routes = require('./routes/employee.routes');
const cors = require('cors');

module.exports = app =>{

    // Settings
    app.set('port', process.env.PORT || 3000);

    // Middlewares
    app.use(morgan('dev'));
    app.use(express.json());
    app.use(cors({origin: 'http://localhost:4200'}));

    // Routes
    routes(app);

    return app;
}