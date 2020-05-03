import { Schema, model } from 'mongoose';

import Address from './utils/Address';

const User = new Schema({
  name: String,
  email: String,
  avatar: String,
})

const Transport = new Schema({
  type: String,
  plate: String,
});

export const RetailerSchema = new Schema({
  cnpj: String,
  fantasy: String,
  email: String,
  phones: [String],
  userLogged: User,
  address: Address,
  transport: [Transport],
}, { timestamps: true });

export default model('Retailer', RetailerSchema);
