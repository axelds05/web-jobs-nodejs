const { Router } = require('express')
const router = Router()

const employeesController = require('../controllers/employees.controller')

router.get('/', (req, res) => res.redirect('/employees'))
router.get('/employees', employeesController.getEmployees)
router.post('/employee', employeesController.uploadEmployee)
router.get('/employee/:id', employeesController.getEmployee)
router.get('/employee/:id/delete', employeesController.deleteEmployee)
router.put('/employee/:id', employeesController.updateEmployee)

module.exports = router
