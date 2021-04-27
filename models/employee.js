const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const Employee = new Schema(
  {
    _id: { type: Schema.Types.ObjectId, ref: "employee_id" },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    job_title: { type: String, required: true },
    address: {
      stree: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      zip: { type: String, required: true },
    }
  },
  {timestamps: true},
);

module.exports = mogoose.model('employee', Employee);