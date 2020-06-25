import 'reflect-metadata';
import express from 'express';
import { errors } from 'celebrate';
import routes from './routes';

import '@shared/infra/typeorm';
import '@shared/container';

const app = express();
app.use(express.json());

app.use(routes);
app.use(errors());

app.listen(3002, () => {
  console.log('Sever started on port 3002');
});
