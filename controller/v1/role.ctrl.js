
const Role = require('../../utils/model/role.md')
const respUtils = require('../../utils/response.util')

exports.postRole = async(req, res)=>{
    // console.log("Got req", req.body)
    const roleData = {
        name : req.body.name,
        scopes : req.body.scopes
    };

    await Role.create(roleData).then((data)=>{
        respUtils.success(data,res)

    }).catch((err)=>{
        respUtils.failure(err.errors,res);

    });

};


exports.getAllRole = async(req, res)=>{
    await Role.find().then((data)=>{
        respUtils.success(data, res)
    }).catch((err)=>{
        respUtils.failure(err.errors,res);
    })
};