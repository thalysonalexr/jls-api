const { config } = require('dotenv');

const env = {
  test: '.env.test',
  production: '.env',
  development: '.env.dev'
}

config({
  path: env[process.env.NODE_ENV]
})
