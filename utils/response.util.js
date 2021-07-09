

exports.success = async(data, res, statusCode = 200, status = true) => {
    res.status(statusCode).json(
        {
            "status": status,
            "content": {
              "data": data
            }
        }
    )
};


exports.failure = async(err, res, statusCode = 400, status = false) => {
    // console.log("error in failure",err)
    res.status(statusCode).json(
        {
            "status": status,
            "errors": err
        }
    )
};