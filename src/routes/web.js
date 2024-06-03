const express = require('express');
const homeController = require('../controller/homeController');
const userController = require('../controller/userController');

let router = express.Router();
const initWebRoute = (app) => {
    router.get('/', homeController.getHomepage);
    router.get('/manageruser', userController.getListUser);
    router.get('/detail/user/:iduser', userController.getDetailPage);
    router.get('/form-register', userController.formRegister);
    router.post('/register', userController.register);
    return app.use('/', router);
}

module.exports = initWebRoute;