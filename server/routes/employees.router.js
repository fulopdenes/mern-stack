const { Router } = require("express");
const EmployeeModel = require("../db/employee.model");

const employeesRouter = new Router();

employeesRouter.use("/:id", async (req, res, next) => {
  let employee = null;

  try {
    employee = await EmployeeModel.findById(req.params.id);

    if (!employee) {
      return res.status(404).end("Employee not found");
    }
  } catch {
    return res.status(400).end("Bad request");
  }

  req.employee = employee;
  next();
});

employeesRouter.get("/", async (req, res) => {
  const employees = await EmployeeModel.find().sort({ created: "desc" });
  return res.json(employees);
});

employeesRouter.get("/:id", (req, res) => {
  return res.json(req.employee);
});

employeesRouter.post("/", async (req, res, next) => {
  const employee = req.body;

  try {
    const saved = await EmployeeModel.create(employee);
    return res.json(saved);
  } catch (err) {
    return next(err);
  }
});

employeesRouter.patch("/:id", async (req, res, next) => {
  const employee = req.body;

  try {
    const updated = await req.employee.set(employee).save();
    return res.json(updated);
  } catch (err) {
    return next(err);
  }
});

employeesRouter.delete("/:id", async (req, res, next) => {
  try {
    const deleted = await req.employee.delete();
    return res.json(deleted);
  } catch (err) {
    return next(err);
  }
});

module.exports = employeesRouter;
