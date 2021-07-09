const Student = require('../../utils/model/student.md')
const isDuplicateError = require('../../utils/error.util')
const respUtils = require('../../utils/response.util')

exports.postStudent = async(req, res)=>{
    const studentData = {
        name : req.body.name,
        userId : req.body.userId,
        schoolId : req.body.schoolId
    };

    await Student.create(studentData).then((data)=>{
        respUtils.success(data, res);

    }).catch((err)=>{
        // console.log("in catch error", err);
        // respUtils.failure(err, res);
        const errMsg = isDuplicateError(err) ? "data already exists." : "Something went wrong.";
        const errObj = [
            {
                "message" : errMsg
            }
        ]
        respUtils.failure(errObj, res);

    });
};

exports.getAllStudent = async(req, res)=>{
    await Student.find().then((data)=>{
        respUtils.success(data, res)
    }).catch((err)=>{
        respUtils.failure(err.errors,res);
    })
};