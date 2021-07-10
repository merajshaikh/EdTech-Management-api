const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    first_name :{
        type : String,
        required: true
    },
    last_name :{
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    mobile :{
        type : String,
        min : 10,
        required: true
    },
    password :{
        type : String,
        required : true,

    },
    roleId :{
        // type : Schema.Types.ObjectId, ref: 'role'
        type : String,
        required : true
    }
},{ timestamps: true });

const userDb = new mongoose.model('user', userSchema);

module.exports = userDb;