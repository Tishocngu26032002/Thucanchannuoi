require('dotenv').config();
const initWebRoute = require('./routes/web');
const express = require('express');
const app = express();
const configViewEngine = require("./config/ViewEngine");
const port = process.env.PORT || 3000;
// const con = require('./config/dbconnect');
//setup View Engine
configViewEngine(app);
//Init web route
initWebRoute(app);

app.listen(port, () => {
    console.log('Server is running');
})