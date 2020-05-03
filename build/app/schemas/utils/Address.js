"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _mongoose = require('mongoose');



const Address = new (0, _mongoose.Schema)({
  address: String,
  city: String,
  uf: String,
  coordinates: [Number],
});

exports. default = Address;
