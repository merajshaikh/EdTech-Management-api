const express = require('express');
const Router = express.Router();

const { SignupCtrl } = require('../../controller/v1');

Router.post('/', SignupCtrl.postUser);


module.exports = Router;