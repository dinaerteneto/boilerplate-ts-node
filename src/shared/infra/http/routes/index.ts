import { Router } from 'express';
import peopleRouter from '@modules/people/infra/http/routes/people.routes';

const routes = Router();

routes.use('/people', peopleRouter);

export default routes;
