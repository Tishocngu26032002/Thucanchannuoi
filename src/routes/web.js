const express = require('express');
const homeController = require('../controller/homeController');
const userController = require('../controller/userController');
const productCotroller = require('../controller/productCotroller');

let router = express.Router();
const initWebRoute = (app) => {
    router.get('/admin/manageruser', userController.getListUser); //admin show list user
    router.post('/admin/delete-user', userController.deleteUser); //delete user
    router.get('/admin/detail/user/:iduser', userController.getDetailPage);//detail user
    router.get('/admin/edit/user/:iduser', userController.getEditPage);

    router.get('/', homeController.getHomepage);
    router.get('/product', productCotroller.getProduct);
    router.get('/login', userController.showFormLogin);
    router.post('/auth', userController.authUser);

    router.get('/form-register', userController.formRegister); //show page register
    router.post('/register', userController.register);//insert user to db

    return app.use('/', router);
}

module.exports = initWebRoute;