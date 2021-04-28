// const db = require("../db");
// //parent
// const EmployeeInfo = require("../model/employeeInfo");

// db.on("error", console.error.bind(console, "MongoDB connection error:"));

// const main = async () => {

//   const oneEmployee = {
//     first_name: "Robert",
//     last_name: "Redford",
//     email: "robert_redford@gmail.com",
//     job_title: "actor, director",
//     address: {
//       stree: "2222 Palo Alto Avenue",
//       city: "Los Angeles",
//       state: "California",
//       zip: "12346",
//     }
//   }
  


  
//   await EmployeeInfo.employees.push(oneEmployee)
//   EmployeeInfo.save((err, data) => { });

//   console.log('Add an employee')
// }


// const run = async () => {
//   await main()

//   db.close();
// }

// run();