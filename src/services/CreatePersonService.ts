import { getCustomRepository } from 'typeorm';

import Person from '../models/Person';
import PeopleRepository from '../repositories/PeopleRepository';

interface Request {
  name: string;
  document: string;
  type: string;
}

class CreatePersonService {
  public async execute({ name, document, type }: Request): Promise<Person> {
    const peopleRepository = getCustomRepository(PeopleRepository);

    const findPerson = await peopleRepository.findByDocument(document);
    if (findPerson) {
      throw Error('This person is already exists.');
    }

    const person = peopleRepository.create({ name, document, type });
    await peopleRepository.save(person);

    return person;
  }
}

export default CreatePersonService;
