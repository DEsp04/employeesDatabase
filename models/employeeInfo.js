const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const EmployeeInfo = new Schema({
  employees: []
})



module.exports = mongoose.model("employeeInfo", EmployeeInfo);