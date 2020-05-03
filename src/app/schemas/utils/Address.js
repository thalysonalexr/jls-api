import { Schema } from 'mongoose';

import { Schema } from 'mongoose';

const Address = new Schema({
  address: String,
  city: String,
  uf: String,
  coordinates: [Number],
});

export default Address;
