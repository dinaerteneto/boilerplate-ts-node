import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import PeopleRepository from '../repositories/PeopleRepository';
import CreatePersonService from '../services/CreatePersonService';

const routes = Router();

routes.get('/', async (request, response) => {
  const peopleRepository = getCustomRepository(PeopleRepository);
  const people = await peopleRepository.find();
  return response.json(people);
});

routes.post('/', async (request, response) => {
  try {
    const createPersonService = new CreatePersonService();

    const person = await createPersonService.execute(request.body);

    return response.json(person);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default routes;
