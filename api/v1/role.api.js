const express = require('express');
const Router = express.Router();

const { RoleCtrl } = require('../../controller/v1');

Router.post('/', RoleCtrl.postRole);
Router.get('/', RoleCtrl.getAllRole);


module.exports = Router;