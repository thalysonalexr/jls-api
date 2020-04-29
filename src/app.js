if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'development';
}

require('./config');
require('./services/Mongo');

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(compression());
app.use('/v1', routes);

module.exports = app;
