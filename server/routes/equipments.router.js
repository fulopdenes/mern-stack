const { Router } = require("express");
const EquipmentModel = require("../db/equipment.model");

const equipmentsRouter = new Router();

equipmentsRouter.use("/:id", async (req, res, next) => {
  let equipment = null;

  try {
    equipment = await EquipmentModel.findById(req.params.id);

    if (!equipment) {
      return res.status(404).end("Equipment not found");
    }
  } catch {
    return res.status(400).end("Bad request");
  }

  req.equipment = equipment;
  next();
});

equipmentsRouter.get("/", async (req, res) => {
  const equipments = await EquipmentModel.find().sort({ created: "desc" });
  return res.json(equipments);
});

equipmentsRouter.get("/:id", (req, res) => {
  return res.json(req.equipment);
});

equipmentsRouter.post("/", async (req, res, next) => {
  const equipment = req.body;

  try {
    const saved = await EquipmentModel.create(equipment);
    return res.json(saved);
  } catch (err) {
    return next(err);
  }
});

equipmentsRouter.patch("/:id", async (req, res, next) => {
  const equipment = req.body;

  try {
    const updated = await req.equipment.set(equipment).save();
    return res.json(updated);
  } catch (err) {
    return next(err);
  }
});

equipmentsRouter.delete("/:id", async (req, res, next) => {
  try {
    const deleted = await req.equipment.delete();
    return res.json(deleted);
  } catch (err) {
    return next(err);
  }
});

module.exports = equipmentsRouter;
