const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");

const app = express();

const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Welcome to node API");
});

mongoose
  .connect("mongodb://localhost:27017/Sample")
  .then(() => {
    console.log("Database connected!");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
