"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Order = require('../schemas/Order'); var _Order2 = _interopRequireDefault(_Order);
var _Retailer = require('../schemas/Retailer'); var _Retailer2 = _interopRequireDefault(_Retailer);
var _Notification = require('../schemas/Notification'); var _Notification2 = _interopRequireDefault(_Notification);

var _SMS = require('../../services/SMS'); var _SMS2 = _interopRequireDefault(_SMS);

class OrderController {
  async store(req, res) {
    const data = req.body;

    const order = await _Order2.default.create(data);
    const retailer = await _Retailer2.default.findById(order.retailer);

    retailer.phones.forEach(async phone => {
      const { to, status } = await _SMS2.default.send(`Você tem um novo pedido de compra para ${data.customer.name} em ${data.customer.address.address}. Verifique os detalhes do pedido no sistema JLS - Jointly Logistics Service.`, '+12565408744', phone);

      await _Notification2.default.create({ to, status })
    })

    return res.status(201).json({ order });
  }

  async details(req, res) {
    const { id } = req.params;

    const order = await _Order2.default.findById(id);

    if (!order)
      return res.status(404).json({ error: `Order not found to id: ${id}` });
    
    return res.status(200).json({ order });
  }

  async index(req, res) {
    const { page = 1 } = req.query;

    const orders = await _Order2.default.paginate({}, { limit: 10, page });

    return res.status(200).json({ orders });
  }
}

exports. default = new OrderController;
