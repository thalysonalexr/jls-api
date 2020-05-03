import Order from '../schemas/Order';
import Retailer from '../schemas/Retailer';
import Notification from '../schemas/Notification';

import SMSService from '../../services/SMS';

class OrderController {
  async store(req, res) {
    const data = req.body;

    const order = await Order.create(data);
    const retailer = await Retailer.findById(order.retailer);

    retailer.phones.forEach(async phone => {
      const { to, status } = await SMSService.send(`Você tem um novo pedido de compra para ${data.customer.name} em ${data.customer.address.address}. Verifique os detalhes do pedido no sistema JLS - Jointly Logistics Service.`, '+12565408744', phone);

      await Notification.create({ to, status })
    })

    return res.status(201).json({ order });
  }

  async details(req, res) {
    const { id } = req.params;

    const order = await Order.findById(id);

    if (!order)
      return res.status(404).json({ error: `Order not found to id: ${id}` });
    
    return res.status(200).json({ order });
  }

  async index(req, res) {
    const { page = 1 } = req.query;

    const orders = await Order.paginate({}, { limit: 10, page });

    return res.status(200).json({ orders });
  }
}

export default new OrderController;
