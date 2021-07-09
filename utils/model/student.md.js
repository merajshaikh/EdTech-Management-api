const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name :{
        type : String,
        required: true
    },
    userId :{
        type : String,
        required: true,
        unique: true

    },
    schoolId : {
        type: String,
        required: true
    }
},{ timestamps: true });

const studentDb = new mongoose.model('student', studentSchema);

module.exports = studentDb;