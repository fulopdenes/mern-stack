// https://mongoosejs.com/
const mongoose = require("mongoose");

const { Schema } = mongoose;

const EmployeeSchema = new Schema({
  name: String,
  startingDate: Date,
  firstName: String,
  middleName: String,
  lastName: String,
  currentSalary: String,
  desiredSalary: String,
  level: String,
  position: String,
  favColor: String,
  boss: String,
  created: {
    type: Date,
    default: Date.now,
  },
});


module.exports = mongoose.model("Employee", EmployeeSchema);
