const bodyParser = require('body-parser');
const express = require('express');

const app = express();

//common middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

module.exports = { app };
