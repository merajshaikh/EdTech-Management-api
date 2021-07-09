const express = require('express');
const Router = express.Router();

const { StudentCtrl } = require('../../controller/v1');

Router.post('/', StudentCtrl.postStudent);
Router.get('/', StudentCtrl.getAllStudent);


module.exports = Router;