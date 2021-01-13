const Employee = require('../models/employee')

const employeesController = {
    getEmployees: async (req, res) => {
        try {
            const employees = await Employee.find();
            res.json(employees)
        }
        catch (err) {
            res.status(400).json({
                error: err
            })
        }
    },
    uploadEmployee: async (req, res) => {
        try {
            const { username, name, lastname } = req.body
            const newEmployee = new Employee({ username, name, lastname  })
            await newEmployee.save()
            res.json('Employee created')
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
        res.json('Employee Deleted')
    },
    updateEmployee: async (req, res) => {
        const { username, name, lastname } = req.body
        await Employee.findByIdAndUpdate(req.params.id, {
            username, 
            name, 
            lastname
        })
        res.json('Employee Updated')
    }
}

module.exports = employeesController
