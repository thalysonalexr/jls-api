"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose');

var _Address = require('./utils/Address'); var _Address2 = _interopRequireDefault(_Address);

 const CustomerSchema = new (0, _mongoose.Schema)({
  cpf: String,
  name: String,
  avatar: String,
  address: _Address2.default,
  phones: [String],
  email: String,
}, { timestamps: true }); exports.CustomerSchema = CustomerSchema;

exports. default = _mongoose.model.call(void 0, 'Customer', exports.CustomerSchema);
