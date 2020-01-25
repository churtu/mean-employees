const express = require('express');
const config = require('./config');

// Initializations
const app = config(express());

// Connecting to mongodb
require('./database');

// Server listening
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});