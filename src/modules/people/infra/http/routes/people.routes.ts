import { Router } from 'express';
import PeopleController from '../controllers/PeopleController';

const routes = Router();

const peopleController = new PeopleController();

/*
routes.get('/', async (request, response) => {
  const people = await peopleRepository.find();
  return response.json(people);
});
*/

routes.post('/', peopleController.create);

export default routes;
