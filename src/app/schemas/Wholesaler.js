import { Schema, model } from 'mongoose';

import Address from './utils/Address';
import Product from './utils/Product';
import Status from './utils/Status';

export const WholesalerSchema = new Schema({
  cnpj: String,
  fantasy: String,
  address: Address,
  phones: [String],
  email: String,
  image: String,
  products: [Product],
  status: [Status],
  generalStatus: {
    type: String,
    enum: ['PENDENTE', 'A CAMINHO', 'ENTREGUE'],
    default: 'PENDENTE'
  }
}, { timestamps: true });

export default model('Wholesaler', WholesalerSchema);
