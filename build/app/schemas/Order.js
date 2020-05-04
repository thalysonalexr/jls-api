"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose');
var _mongoosepaginate = require('mongoose-paginate'); var _mongoosepaginate2 = _interopRequireDefault(_mongoosepaginate);

var _Wholesaler = require('./Wholesaler');
var _Customer = require('./Customer');

var _Product = require('./utils/Product'); var _Product2 = _interopRequireDefault(_Product);
var _Status = require('./utils/Status'); var _Status2 = _interopRequireDefault(_Status);

const OrderSchema = new (0, _mongoose.Schema)({
  retailer: {
    type: _mongoose.Types.ObjectId,
    ref: 'Retailer'
  },
  customer: _Customer.CustomerSchema,
  wholesaler: _Wholesaler.WholesalerSchema,
  productsWholesaler: [_Product2.default],
  productsRetailer: [_Product2.default],
  status: [_Status2.default],
  statusGeneral: {
    type: String,
    enum: ['PENDENTE', 'A CAMINHO', 'ENTREGUE', 'CANCELADO'],
    default: 'PENDENTE',
  },
  subtotal: Number,
}, { timestamps: true });

OrderSchema.plugin(_mongoosepaginate2.default);

OrderSchema.pre('save', function(next) {
  this.subtotal = 0;

  this.productsWholesaler.forEach(product => {
    this.subtotal += (product.price * product.itens)
  })

  this.productsRetailer.forEach(product => {
    this.subtotal += (product.price * product.itens)
  })

  return next();
});

exports. default = _mongoose.model.call(void 0, 'Order', OrderSchema);
