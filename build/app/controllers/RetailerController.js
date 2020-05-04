"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Retailer = require('../schemas/Retailer'); var _Retailer2 = _interopRequireDefault(_Retailer);
var _Order = require('../schemas/Order'); var _Order2 = _interopRequireDefault(_Order);

class RetailerController {
  async store(req, res) {
    const data = req.body;

    const retailer = await _Retailer2.default.create(data);
    return res.status(201).json({ retailer });
  }

  async showOrders(req, res) {
    const { id } = req.params;

    const retailer = await _Retailer2.default.findById(id);
    const orders = (await _Order2.default.find().sort({ createdAt: -1 })).map(
      ({
        _id: order,
        createdAt: date,
        statusGeneral: status,
        customer: { name, avatar },
      }) => {
        return {
          order,
          date,
          status,
          name,
          avatar,
        };
      }
    );

    return res.status(200).json({ retailer, orders });
  }
}

exports. default = new RetailerController();
