"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _app = require('./app'); var _app2 = _interopRequireDefault(_app);

const port = process.env.PORT;
const host = process.env.BASE_URL;

_app2.default.listen(+port, host, () => {
  console.log(`[${process.env.NODE_ENV}] Running on http://${host}:${port}`);
});
