const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
    name :{
        type : String,
        required: true
    },
    scopes :{
        type : [String],
        required : true
    }
},{ timestamps: true });

const roleDb = mongoose.model('role',roleSchema);

module.exports = roleDb;