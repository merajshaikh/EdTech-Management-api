const express = require('express');
const Router = express.Router();

const usersApi = require('./user.api');
const roleApi = require('./role.api');
const schoolApi = require('./school.api');
const studentApi = require('./student.api');
const signupApi = require('./signup.api');
const signinApi = require('./signin.api');





Router.use('/user', usersApi);
Router.use('/user/signup', signupApi);
Router.use('/user/signin', signinApi);
Router.use('/role', roleApi);
Router.use('/school', schoolApi);
Router.use('/student', studentApi);






module.exports = Router;