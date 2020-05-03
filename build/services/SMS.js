"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _twilio = require('twilio'); var _twilio2 = _interopRequireDefault(_twilio);

const client = _twilio2.default.call(void 0, process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

class SMS {
  constructor(messages) {
    this.message = messages;
  }

  async send(body, from, to) {
    return await this.message.create({ body, from, to });
  }
}

exports. default = new SMS(client.messages);
