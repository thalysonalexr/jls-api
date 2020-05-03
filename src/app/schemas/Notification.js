import { Schema, model } from 'mongoose';

const NotificationSchema = new Schema({
  to: String,
  status: String,
});

export default model('Notification', NotificationSchema);
