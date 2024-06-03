require('dotenv').config();
const initWebRoute = require('./routes/web');
const express = require('express');
const app = express();
const configViewEngine = require("./config/ViewEngine");
const port = process.env.PORT || 3000;

//config for get data 
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

//setup View Engine
configViewEngine(app);

//Init web route
initWebRoute(app);

app.listen(port, () => {
    console.log('Server is running');
})