const express = require("express");
const mongoose = require("mongoose");
const Product = require('./Models/Product.model.js')


const app = express();
app.use(express.json());

const PORT = 3000;
const hostName = "localhost";

app.get("/", (req, res) => {
  res.send("Hello from API Server...");
});






// POST API starts
app.post("/api/products", (req, res) => {
  try {

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// POST API ends











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
