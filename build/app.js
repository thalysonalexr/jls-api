"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'development';
}

require('./config');
require('./services/Mongo');

var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _morgan = require('morgan'); var _morgan2 = _interopRequireDefault(_morgan);
var _helmet = require('helmet'); var _helmet2 = _interopRequireDefault(_helmet);
var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _compression = require('compression'); var _compression2 = _interopRequireDefault(_compression);
var _routes = require('./routes'); var _routes2 = _interopRequireDefault(_routes);
var _path = require('path'); var _path2 = _interopRequireDefault(_path);

const app = _express2.default.call(void 0, );

app.use(_cors2.default.call(void 0, ));
app.use(_helmet2.default.call(void 0, ));
app.use(_express2.default.urlencoded({ extended: true }));
app.use(_express2.default.json());
app.use(_morgan2.default.call(void 0, 'dev'));
app.use(_compression2.default.call(void 0, ));
app.use('/v1', _routes2.default);
app.use('/v1/files', _express2.default.static(_path2.default.resolve(__dirname, '..', 'tmp', 'uploads')));

exports. default = app;
