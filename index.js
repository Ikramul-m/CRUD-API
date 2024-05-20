const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = 3000;
const hostName = "localhost";

app.get("/", (req, res) => {
  res.send("Hello from API Server...");
});

mongoose
  .connect("mongodb://localhost:27017/Allproducts")
  .then(() => {
    console.log("Connected to database!");
    app.listen(PORT, () => {
      console.log(`Server listening on http://${hostName}:${PORT}`);
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
