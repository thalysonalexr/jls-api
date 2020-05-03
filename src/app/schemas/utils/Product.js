import {Schema  } from 'mongoose';

const Product = new Schema({
  name: String,
  itens: Number,
  price: Number,
});

export default Product;
