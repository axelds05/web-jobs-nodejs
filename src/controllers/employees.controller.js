const Employee = require('../models/employee')

const employeesController = {
    getEmployees: async (req, res) => {
        try {
            const employees = await Employee.find()
            res.render('index', { employees })
        } catch (err) {
            res.status(400).json({
                error: err
            })
        }
    },
    uploadEmployee: async (req, res) => {
        try {
            const newEmployee = new Employee(req.body)
            await newEmployee.save()
            res.redirect('/employees')
        } catch (e) {
            console.log(e)
            res.json(e.errmsg)
        }
    },
    getEmployee: async (req, res) => {
        const employee = await Employee.findById(req.params.id)
        res.json(employee)
    },
    deleteEmployee: async (req, res) => {
        await Employee.findByIdAndDelete(req.params.id)
        res.redirect('/employees')
    },
    updateEmployee: async (req, res) => {
        const { username, name, lastname } = req.body
        await Employee.findByIdAndUpdate(req.params.id, {
            name,
            lastname,
            mail,
            area,
            experience
        })
        res.json('Employee Updated')
    }
}

module.exports = employeesController
