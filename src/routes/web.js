const express = require('express');
const homeController = require('../controller/homeController');
const userController = require('../controller/userController');

let router = express.Router();
const initWebRoute = (app) => {
    router.get('/', homeController.getHomepage);
    router.get('/manageruser', userController.getListUser);
    return app.use('/', router);
}

module.exports = initWebRoute;