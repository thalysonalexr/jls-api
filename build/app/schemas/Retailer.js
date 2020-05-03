"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose');

var _Address = require('./utils/Address'); var _Address2 = _interopRequireDefault(_Address);

const User = new (0, _mongoose.Schema)({
  name: String,
  email: String,
  avatar: String,
})

const Transport = new (0, _mongoose.Schema)({
  type: String,
  plate: String,
});

 const RetailerSchema = new (0, _mongoose.Schema)({
  cnpj: String,
  fantasy: String,
  email: String,
  phones: [String],
  userLogged: User,
  address: _Address2.default,
  transport: [Transport],
}, { timestamps: true }); exports.RetailerSchema = RetailerSchema;

exports. default = _mongoose.model.call(void 0, 'Retailer', exports.RetailerSchema);
