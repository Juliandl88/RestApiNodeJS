const express = require('express');
const debug = require('debug')("app:server");
const {Config} = require('./src/config/index');
const { ProductsApi } = require("./src/products/index");


const app = express();



app.use(express.json());


//Módulos

ProductsApi(app);

app.listen(Config.port, () => {
    debug(`Listening on port ${Config.port}`);
});

