const User = require('../../utils/model/user.md')
const isDuplicateError = require('../../utils/error.util')
const respUtils = require('../../utils/response.util')

exports.postUser = async(req, res)=>{
    // console.log("Got req", req.body)
    const userData = {
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        email : req.body.email,
        mobile : req.body.mobile,
        password : req.body.password,
        roleId : req.body.roleId
    };

    await User.create(userData).then((data)=>{
        respUtils.success(data, res);

    }).catch((err)=>{
        // console.log("in catch error", err);
        const errMsg = isDuplicateError(err) ? "Email address already exists." : "Something went wrong.";
        const errObj = [
            {
                "message" : errMsg
            }
        ]
        respUtils.failure(errObj, res);

    });

};

exports.getAllUser = async(req, res)=>{
    await User.find().then((data)=>{
        respUtils.success(data, res)
    }).catch((err)=>{
        respUtils.failure(err.errors,res);
    })
};

exports.getSingleUser = async(req,res)=>{
    const userId = req.params.id;
    // console.log(userId)
    User.findById(userId).then((data)=>{
        respUtils.success(data, res)
    }).catch((err)=>{
        respUtils.failure(err,res);
    })
}