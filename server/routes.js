// these files were made 
const router = require('express').Router();
const controller = require('./controller.js');


//router chain no
router
    .route('/todoList')//defining the endpoint 
    .get(controller.get)
    .post(controller.post)
    .delete(controller.delete)

module.exports = router;