const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter name"],
    },

    price: {
      type: Number,
      required: [true, "Please enter price"],
      default: 0,
    },

    quantity: {
      type: Number,
      required: [true, "Please enter quantity"],
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
