import { Schema, Types, model } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

import { WholesalerSchema } from './Wholesaler';
import { CustomerSchema } from './Customer';

import Product from './utils/Product';
import Status from './utils/Status';

const OrderSchema = new Schema({
  retailer: {
    type: Types.ObjectId,
    ref: 'Retailer'
  },
  customer: CustomerSchema,
  wholesaler: WholesalerSchema,
  productsWholesaler: [Product],
  productsRetailer: [Product],
  status: [Status],
  statusGeneral: {
    type: String,
    enum: ['PENDENTE', 'A CAMINHO', 'ENTREGUE', 'CANCELADO'],
    default: 'PENDENTE',
  },
  subtotal: Number,
}, { timestamps: true });

OrderSchema.plugin(mongoosePaginate);

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

export default model('Order', OrderSchema);
