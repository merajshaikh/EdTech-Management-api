const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schoolSchema = new mongoose.Schema({
    name :{
        type : String,
        required: true,
        unique: true
    },
    city :{
        type : String,
        required: true
    },
    state : {
        type: String,
        required: true,
    },
    country :{
        type: String,
        required: true,
    }
},{ timestamps: true });

const schoolDb = new mongoose.model('school', schoolSchema);

module.exports = schoolDb;