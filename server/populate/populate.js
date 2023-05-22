/*
Loading the .env file and creates environment variables from it
*/
require("dotenv").config();
const mongoose = require("mongoose");
const names = require("./names.json");
const levels = require("./levels.json");
const positions = require("./positions.json");
const startingDate = require("./startingDates.json");
const currentSalary = require("./salaryCurrents.json");
const desiredSalary = require("./salaryDesired.json");
const favColor = require("./favColors.json");

const EmployeeModel = require("../db/employee.model");

const EquipmentModel = require("../db/equipment.model");

const eqName = require("./eq_names.json");
const eqType = require("./eq_types.json");
const eqAmount = require("./eq_amounts.json");

const middleName = names.map((name) => {
  if (name.split(" ").length > 2) {
    return name.split(" ")[1];
  } else {
    return "";
  }
});

const mongoUrl = process.env.MONGO_URL;

if (!mongoUrl) {
  console.error("Missing MONGO_URL environment variable");
  process.exit(1); // exit the current program
}

const pick = (from) => from[Math.floor(Math.random() * (from.length - 0))];

const populateEmployees = async () => {
  await EmployeeModel.deleteMany({});

  // startingDate: Date,
  // firstName: String,
  // middleName: String,
  // lastName: String,
  // currentSalary: String,
  // desiredSalary: String,
  // level: String,
  // position: String,
  // favColor: String,

  const employees = names.map((name, i) => ({
    name: name,
    startingDate: pick(startingDate),
    firstName: name.split(" ")[0],
    middleName: middleName[i].toString(),
    lastName: name.split(" ").at(-1),
    currentSalary: pick(currentSalary),
    desiredSalary: pick(desiredSalary),
    level: pick(levels),
    position: pick(positions),
    favColor: pick(favColor),
  }));

  await EmployeeModel.create(...employees);
  console.log("Employees created");
};

const populateEquipments = async () => {
  await EquipmentModel.deleteMany({});

  const equipments = eqName.map((name) => ({
    name: name,
    type: pick(eqType),
    amount: pick(eqAmount),
  }));

  await EquipmentModel.create(...equipments);
  console.log("Equipments created");
};

const main = async () => {
  await mongoose.connect(mongoUrl);

  await populateEmployees();

  await populateEquipments();

  await mongoose.disconnect();
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
