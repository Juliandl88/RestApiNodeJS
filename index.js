const express = require('express');
const debug = require('debug')("app:server");
const {Config} = require('./src/config/index');

const app = express();



app.use(express.json());


//Módulos

app.listen(Config.port, () => {
    debug(`Listening on port ${Config.port}`);
});

