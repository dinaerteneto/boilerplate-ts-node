import { Router } from 'express';
import peopleRouter from './people.routes';

const routes = Router();

routes.use('/people', peopleRouter);

export default routes;
