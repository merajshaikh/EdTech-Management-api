const express = require('express');
const Router = express.Router();

const { UserCtrl } = require('../../controller/v1');

Router.get('/', UserCtrl.getAllUser);
Router.get('/:id', UserCtrl.getSingleUser);



module.exports = Router;