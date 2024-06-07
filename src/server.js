require('dotenv').config();
const initWebRoute = require('./routes/web');
const express = require('express');
const configViewEngine = require("./config/ViewEngine");
const session = require('express-session');

const app = express();
const port = process.env.PORT || 3000;

//config for get data 
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

//session
app.use(session({
    secret: 'userRole',
    resave: false,
    saveUninitialized: true
}));

//setup View Engine
configViewEngine(app);

//Init web route
initWebRoute(app);

app.listen(port, () => {
    console.log('Server is running');
})