if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'development';
}

import './config';
import './services/Mongo';

import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import express from 'express';
import compression from 'compression';
import routes from './routes';
import path from 'path';

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(compression());
app.use('/v1', routes);
app.use('/v1/files', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')));

export default app;
