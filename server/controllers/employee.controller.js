const {Employee} = require('../models');
const controller = {}

controller.getEmployees = async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
}

controller.createEmployee = async (req, res) => {
    const newEmployee = new Employee(req.body);
    const created = await newEmployee.save();
    res.json({creado: created});
}

controller.getEmployee = async (req, res) => {
    const employee = await Employee.findOne({_id: req.params.id});
    res.json({employee});
}

controller.deleteEmployee = async (req, res) => {
    const deleted = await Employee.findByIdAndDelete({_id: req.params.id});
    res.json({deleted: deleted});
}

controller.updateEmployee = async (req, res) => {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.json({actualizado: employee});
}

module.exports = controller;