import { Schema, model } from 'mongoose';

import Address from './utils/Address';

export const WholesalerSchema = new Schema({
  cnpj: String,
  fantasy: String,
  address: Address,
  phones: [String],
  email: String,
  image: String,  
}, { timestamps: true });

export default model('Wholesaler', WholesalerSchema);
