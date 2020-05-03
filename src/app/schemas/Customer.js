import { Schema, model } from 'mongoose';

import Address from './utils/Address';

export const CustomerSchema = new Schema({
  cpf: String,
  name: String,
  avatar: String,
  address: Address,
  phones: [String],
  email: String,
}, { timestamps: true });

export default model('Customer', CustomerSchema);
