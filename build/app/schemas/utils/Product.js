"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _mongoose = require('mongoose');

const Product = new (0, _mongoose.Schema)({
  name: String,
  itens: Number,
  price: Number,
});

exports. default = Product;
