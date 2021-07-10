const User = require('../../utils/model/user.md')
const isDuplicateError = require('../../utils/error.util')
const respUtils = require('../../utils/response.util')
const bcrypt = require('bcrypt')


exports.postUser = (req, res, next)=>{
    bcrypt.hash(req.body.password, 10, function(err, hashedPass){
        if(err){
            res.json({
                error : err
            })
        }
        let userData = new User({
            first_name : req.body.first_name,
            last_name : req.body.last_name,
            email : req.body.email,
            mobile : req.body.mobile,
            password : hashedPass,
            roleId : req.body.roleId
        })
        userData.save()
        .then(userdata=>{
            respUtils.success(userdata, res);
        })
        .catch((err)=>{
            // console.log("in catch error", err);
            const errMsg = isDuplicateError(err) ? "Email Or Mobile no already exists." : "Something went wrong.";
            const errObj = [
                {
                    "message" : errMsg
                }
            ]
            respUtils.failure(errObj, res);
    
        });
    })

}; 