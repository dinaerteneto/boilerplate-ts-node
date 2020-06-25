import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import PeopleController from '../controllers/PeopleController';

const routes = Router();

const peopleController = new PeopleController();

/*
routes.get('/', async (request, response) => {
  const people = await peopleRepository.find();
  return response.json(people);
});
*/

routes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      document: Joi.number().required(),
      type: Joi.string()
        .valid(...['NATURAL', 'JURISTIC'])
        .required(),
    },
  }),
  peopleController.create
);

export default routes;
