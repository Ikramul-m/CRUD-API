const express = require("express");
const mongoose = require("mongoose");
const Product = require("./Models/Product.model.js");

const app = express();
app.use(express.json());

const PORT = 3000;
const hostName = "localhost";

app.get("/", (req, res) => {
  res.send("Hello from API Server...");
});

// GET API
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
});

// GET Product API by Id
app.get("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
});

// POST API
app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Update Product (PUT Method)

app.put("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const updatedProduct = await Product.findById(id);

    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



// Delete a product 

app.delete('/api/products/:id', async (req, res) => {

  try
  {
    const { id } = req.params
    const product = await Product.findByIdAndDelete(id)

    if(!product)
      {
        return res.status(404).json({ message: "Product not found"})
      }

      res.status(200).json({ message: "Product deleted successfully"})

  }
  catch(err)
  {
    res.status(500).json({message: err.message})
  }

})




















// Database connection
mongoose
  .connect("mongodb://localhost:27017/Myproducts")
  .then(() => {
    console.log("Connected to database!");
    app.listen(PORT, () => {
      console.log(`Server listening on http://${hostName}:${PORT}`);
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
