const express = require('express');
const Router = express.Router();

const { UserCtrl } = require('../../controller/v1');

Router.post('/', UserCtrl.postUser);
Router.get('/', UserCtrl.getAllUser);
Router.get('/:id', UserCtrl.getSingleUser);



module.exports = Router;