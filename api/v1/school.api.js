const express = require('express');
const Router = express.Router();

const { SchoolCtrl } = require('../../controller/v1');

Router.post('/', SchoolCtrl.postSchool);
Router.get('/', SchoolCtrl.getAllSchool);


module.exports = Router;