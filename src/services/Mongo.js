import mongoose from 'mongoose';

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

export default new Mongo(mongoose).connect()
