const School = require('../../utils/model/school.md')
const isDuplicateError = require('../../utils/error.util')
const respUtils = require('../../utils/response.util')

exports.postSchool = async(req, res)=>{
    const schoolData = {
        name : req.body.name,
        city : req.body.city,
        state : req.body.state,
        country : req.body.country
    }
    await School.create(schoolData).then((data)=>{
        respUtils.success(data, res);
    }).catch((err)=>{
        const errMsg = isDuplicateError(err) ? "School already exists." : "Something went wrong.";
        const errObj = [
            {
                "message" : errMsg
            }
        ]
        respUtils.failure(errObj, res);

    });
}

exports.getAllSchool = async(req, res)=>{
    await School.find().then((data)=>{
        respUtils.success(data, res)
    }).catch((err)=>{
        respUtils.failure(err.errors,res);
    })
};