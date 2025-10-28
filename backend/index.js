/* eslint-disable no-undef */
const express = require("express");
require("dotenv").config();
const botRouter = require("./routes/botRoutes");

const app = express();
const port = process.env.SERVER_PORT || 3000;

app.use(express.json());

app.use("/bot", botRouter);

app.get("/", (req, res) => {
  res.send("Backend is Running!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
