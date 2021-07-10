const express = require('express');
const Router = express.Router();

const { SigninCtrl } = require('../../controller/v1');

Router.post('/', SigninCtrl.login);


module.exports = Router;