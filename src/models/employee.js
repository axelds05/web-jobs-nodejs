const { Schema, model } = require('mongoose')

const employeeSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        name: {
            type: String,
            required: true
        },
        lastname: String
    }, {
        timestamps: true
    });

module.exports = model('Employee', employeeSchema)