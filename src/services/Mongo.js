const mongoose = require('mongoose');

class Mongo {
  constructor() {
    mongoose.connect(process.env.MONGO_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }).then(() => {
      console.log('Mongo database is connected.')
    }).catch(err => {
      console.log(err.message)
    })
  }
}

module.exports = new Mongo;
