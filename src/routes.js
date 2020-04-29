const { Router } = require('express');

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({
    api: process.env.JLS_NAME,
    docs: 'https://github.com/thalysonalexr/jls-api#readme',
    version: 'v1',
  });
});

module.exports = routes;
