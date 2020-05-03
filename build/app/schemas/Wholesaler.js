"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose');

var _Address = require('./utils/Address'); var _Address2 = _interopRequireDefault(_Address);
var _Product = require('./utils/Product'); var _Product2 = _interopRequireDefault(_Product);
var _Status = require('./utils/Status'); var _Status2 = _interopRequireDefault(_Status);

 const WholesalerSchema = new (0, _mongoose.Schema)({
  cnpj: String,
  fantasy: String,
  address: _Address2.default,
  phones: [String],
  email: String,
  image: String,
  products: [_Product2.default],
  status: [_Status2.default],
  generalStatus: {
    type: String,
    enum: ['PENDENTE', 'A CAMINHO', 'ENTREGUE'],
    default: 'PENDENTE'
  }
}, { timestamps: true }); exports.WholesalerSchema = WholesalerSchema;

exports. default = _mongoose.model.call(void 0, 'Wholesaler', exports.WholesalerSchema);
