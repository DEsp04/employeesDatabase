const db = require('./db');
const Employee = require("./model/employee");
const EmployeeInfo = require("./model/employeeInfo");


db.on('error', console.error.bind(console, 'MongoDB connection error:'));


const deleteAll = async () => {
  const employees = await Employee.deleteMany();


  // console.log("All employees found", employees);
}

const findAll = async () => {
  const employees = await Employee.find();
  console.log("All employees found", employees);
}

const createAnEmployee = async () => {
  const addEmployee = {
    first_name: "Will",
    last_name: "Smith",
    email: "smith@gmail.com",
    job_title: "actor",
    address: {
      street: "2222 Bel Air Avenue",
      city: "Los Angeles",
      state: "California",
      zip: "12346",
    }
  }

    await Employee.insertMany(addEmployee)
    console.log("added an employee")

}


const createThreeEmployee = async () => {
  const addThreeEmployee = [
    {
      first_name: "Denise",
      last_name: "Richard",
      email: "drichard@gmail.com",
      job_title: "actress",
      address: {
        street: "2222 Hollywood Avenue",
        city: "Los Angeles",
        state: "California",
        zip: "12346",
      }
    },
    {
      first_name: "Tyra",
      last_name: "Banks",
      email: "tBanks02@gmail.com",
      job_title: "actress",
      address: {
        street: "222 Long Beach Avenue",
        city: "Los Angeles",
        state: "California",
        zip: "12346",
      }
    },
    {
      first_name: "Ice",
      last_name: "Cube",
      email: "icecube@gmail.com",
      job_title: "actor",
      address: {
        street: "2222 Buena Vista Avenue",
        city: "Los Angeles",
        state: "California",
        zip: "12346",
      }
    }
      ]

    await Employee.insertMany(addThreeEmployee)
    console.log("added an employee")

}


const updateEmployee = async () => {
  const employees = await Employee.updateOne({ first_name: "Will" }, { $set: { address: "3333 PeachTree" } });
  console.log("update Will:", employees)
}

const deleteAnEmployee = async () => {
  const employee = await Employee.deleteOne({ first_name: "Tyra" });
  console.log("Deleted an employee by name")
}






const run = async () => {

  // await deleteAll();
  await findAll();
  // await createAnEmployee();
  // await createThreeEmployee();
  // await updateEmployee();
  // await deleteAnEmployee();
  process.exit()  
}

run()