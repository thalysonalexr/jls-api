import { Router } from 'express';

const routes = Router();

import OrderController from './app/controllers/OrderController';
import RetailerController from './app/controllers/RetailerController';

routes.get('/', (req, res) => {
  return res.json({
    api: process.env.JLS_NAME,
    docs: 'https://github.com/thalysonalexr/jls-api#readme',
    version: 'v1',
  });
});

routes.post('/orders', OrderController.store);
routes.get('/orders', OrderController.index);
routes.get('/orders/:id', OrderController.details);

routes.post('/retailers', RetailerController.store);
routes.get('/retailers/:id/orders', RetailerController.showOrders);

export default routes;
