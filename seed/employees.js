const db = require("../db");
//child
const Employee = require("../models/employee");




db.on("error", console.error.bind(console, "MongoDB connection error:"));


const main = async () => {
  
  const employees = [
    {
      first_name: "Jack",
      last_name: "Nicolson",
      email: "jack_nicolson@gmail.com",
      job_title: "actor",
      address: {
        stree: "2112 Chestnut Avenue",
        city: "Los Angeles",
        state: "California",
        zip: "12346",
      }
    },
    {
      first_name: "Marlon",
      last_name: "Brando",
      email: "marlon_brando@gmail.com",
      job_title: "actor",
      address: {
        stree: "6556 Pinetree Avenue",
        city: "Los Angeles",
        state: "California",
        zip: "12346",
      }
    },
    {
      first_name: "Oz",
      last_name: "Doc",
      email: "oz@gmail.com",
      job_title: "medical doctor",
      address: {
        stree: "4329 Oaktree Avenue",
        city: "Los Angeles",
        state: "California",
        zip: "12346",
      }
    },
    {
      first_name: "Liz",
      last_name: "Banks",
      email: "liz_banks@gmail.com",
      job_title: "actress",
      address: {
        stree: "9625 Redondo Avenue",
        city: "Los Angeles",
        state: "California",
        zip: "12346",
      }
    },
    {
      first_name: "Daniella",
      last_name: "Pichardson",
      email: "daniella@gmail.com",
      job_title: "chemical engineer",
      address: {
        stree: "2116 Silverstreak Avenue",
        city: "Los Angeles",
        state: "California",
        zip: "12346",
      }
    },
  ];


  await Employee.insertMany(employees);
  
  console.log("created books with publishers")

};


const run = async () => {
  await main();
  db.close();
};

run();