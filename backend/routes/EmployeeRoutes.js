const express = require("express")
const mongoose = require('mongoose');

const EmployeesModel = require('../models/EmployeesModel');
const routes = express.Router()

//Get All Employees
//http://localhost:8081/api/emp/employees
//GET
routes.get('/employees', async (req, res) => {
    try {
        const employees = await EmployeesModel.find()
        res.status(200).send(employees)
    } catch (error) {
        res.status(400).send(error)
    }
});

/*
{
"first_name": "Tam",
"last_name": "Harrow",
"email" : "tam@hollywood.com",
"gender": "Male",
"salary": 125500.00
}
*/
//Create New Employee
//http://localhost:8081/api/emp/employees
//POST
routes.post('/employees', async (req, res) => {
    try {
        const newEmployee = new EmployeesModel(req.body)
        const employee = await newEmployee.save()
        res.status(201).send(employee)
    } catch (error) {
        res.status(400).send(error)
    }
});


//Get Employee Details by Employee ID
//http://localhost:8081/api/emp/employees/{eid}
//GET
routes.get('/employees/:eid', async (req, res) => {
    try {
        const employee = await EmployeesModel.findById(req.params.eid)
        if(!employee){
            res.status(400).send({message: "No Employee Found"})
        }
        res.status(200).send(employee)
    } catch (error) {
        res.status(400).send(error)
    }
});


//Update Employee Details
//http://localhost:8081/api/emp/employees/{eid}
//PUT
routes.put('/employees/:eid', async (req, res) => {
    try {
        const newEmployee = await EmployeesModel.findByIdAndUpdate(req.params.eid, req.body)
        res.status(200).send(newEmployee)
    } catch (error) {
        res.status(400).send(error)
    }
});

//Delete Employee by Employee ID
//http://localhost:8081/api/emp/employees?eid=xxx
//DELETE
routes.delete('/employees', async (req, res) => {
    try {
        const deletedEmployee = await EmployeesModel.findByIdAndDelete(req.query.eid)
        if(!deletedEmployee){
            res.status(400).send({message: "No Employee to Delete"})
        }
        res.status(204).send(deletedEmployee)
    } catch (error) {
        res.status(400).send(error)
    }
});


module.exports = routes