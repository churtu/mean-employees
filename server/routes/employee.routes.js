const router = require('express').Router();
const employee = require('../controllers/employee.controller');

module.exports = app => {

    router.route('/')
        .get(employee.getEmployees)
        .post(employee.createEmployee);

    router.route('/:id')
        .get(employee.getEmployee)
        .delete(employee.deleteEmployee)
        .put(employee.updateEmployee);

    app.use('/api/employees',router);
}