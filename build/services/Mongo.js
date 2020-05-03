"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);

class Mongo {
  constructor(mongoose) {
    this.instance = mongoose
  }

  async connect() {
    try {
      await this.instance.connect(process.env.MONGO_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      })

      console.log('[MongoDB] connected successfully.');
    } catch (err) {
      console.log(`[MongoDB] error: ${err.message}`);
    }
  }
}

exports. default = new Mongo(_mongoose2.default).connect()
