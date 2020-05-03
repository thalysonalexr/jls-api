"use strict";var _dotenv = require('dotenv');

const env = {
  test: '.env.test',
  production: '.env',
  development: '.env.dev'
}

_dotenv.config.call(void 0, {
  path: env[process.env.NODE_ENV]
})
