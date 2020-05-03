import { Schema } from 'mongoose';

const Status = new Schema({
  description: String,
  date: String,
});

export default Status;
