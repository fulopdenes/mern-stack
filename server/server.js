require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const employeesRouter = require("./routes/employees.router");
const cors = require("cors");

const equipmentsRouter = require("./routes/equipments.router");

const { MONGO_URL, PORT = 8080 } = process.env;

if (!MONGO_URL) {
  console.error("Missing MONGO_URL environment variable");
  process.exit(1);
}
const corsOptions = {
  origin: "https://mernstack-cdpu.onrender.com"
};

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/employees", employeesRouter);

app.use("/api/equipments", equipmentsRouter);

const main = async () => {
  await mongoose.connect(MONGO_URL);

  app.listen(PORT, () => {
    console.log("App is listening on 8080");
    console.log("Server is running with success...");
  });
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
