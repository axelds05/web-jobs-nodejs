const { Schema, model } = require('mongoose')

const employeeSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        lastname: {
            type: String,
            required: true,
            trim: true
        },
        mail: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        area: {
            type: String,
            required: true
        },
        experience: {
            type: String,
            required: true
        },
    }, {
        timestamps: true
    });

module.exports = model('Employee', employeeSchema)