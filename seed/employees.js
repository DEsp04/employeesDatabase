const db = require("../db");
const Employee = require("../models/employee");
const EmployeeInfo = require("../models/employeeInfo");



db.on("error", console.error.bind(console, "MongoDB connection error:"));


