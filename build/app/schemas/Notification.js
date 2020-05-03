"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _mongoose = require('mongoose');

const NotificationSchema = new (0, _mongoose.Schema)({
  to: String,
  status: String,
});

exports. default = _mongoose.model.call(void 0, 'Notification', NotificationSchema);
