const User = require('../../utils/model/user.md')
const respUtils = require('../../utils/response.util')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.login = (req, res, next)=>{
    var username = req.body.username;
    var password = req.body.password;
    User.findOne({$or: [{email:username},{phone:username}]})
    .then(user=>{
        bcrypt.compare(password, user.password, function(err, result){
            if(err){
                res.json({
                    error : err
                })
            }
            if(result){
                let token = jwt.sign({name : user.name},'verySecretValue', {expiresIn : "1h"})
                res.json({
                    message : "login success",
                    token
                })

            }else{
                res.json({
                    message : "password does not match"
                })
            }
        })
    })
}