const mongoose = require('mongoose');


//define schema
const employeeSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        maxLength: 100
    },
    last_name: {
        type: String,
        required: true,
        maxLength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true,
        maxLength: 50
    },
    gender: {
        type: String,
        maxLength: 25,
        enum: ["Female", "Male", "Other"]
    },
    salary: {
        type: Number,
        required: true
    }
})

//creating model from schema
module.exports = mongoose.model("employee", employeeSchema)