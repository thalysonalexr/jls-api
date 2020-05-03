import twilio from 'twilio';

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

class SMS {
  constructor(messages) {
    this.message = messages;
  }

  async send(body, from, to) {
    return await this.message.create({ body, from, to });
  }
}

export default new SMS(client.messages);
