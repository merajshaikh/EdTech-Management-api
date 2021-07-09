const isDuplicateError = async(err)=>{
    if(err.code == 11000){
        return true;
    }
    return false;
};

module.exports = isDuplicateError;