"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

const routes = _express.Router.call(void 0, );

var _OrderController = require('./app/controllers/OrderController'); var _OrderController2 = _interopRequireDefault(_OrderController);
var _RetailerController = require('./app/controllers/RetailerController'); var _RetailerController2 = _interopRequireDefault(_RetailerController);

routes.get('/', (req, res) => {
  return res.json({
    api: process.env.JLS_NAME,
    docs: 'https://github.com/thalysonalexr/jls-api#readme',
    version: 'v1',
  });
});

routes.post('/orders', _OrderController2.default.store);
routes.get('/orders', _OrderController2.default.index);
routes.get('/orders/:id', _OrderController2.default.details);

routes.post('/retailers', _RetailerController2.default.store);
routes.get('/retailers/:id/orders', _RetailerController2.default.showOrders);

exports. default = routes;
