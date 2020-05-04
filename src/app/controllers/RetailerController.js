import Retailer from '../schemas/Retailer';
import Order from '../schemas/Order';

class RetailerController {
  async store(req, res) {
    const data = req.body;

    const retailer = await Retailer.create(data);
    return res.status(201).json({ retailer });
  }

  async showOrders(req, res) {
    const { id } = req.params;

    const retailer = await Retailer.findById(id);
    const orders = (await Order.find().sort({ createdAt: -1 })).map(
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

export default new RetailerController();
