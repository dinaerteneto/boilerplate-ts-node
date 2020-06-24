import { getRepository, Repository } from 'typeorm';
import IPeopleRepository from '@modules/people/repositories/IPeopleRepository';
import ICreatePersonDTO from '@modules/people/dtos/ICreatePersonDTO';

import Person from '../entities/Person';

class PeopleRepository implements IPeopleRepository {
  private ormRepository: Repository<Person>;

  constructor() {
    this.ormRepository = getRepository(Person);
  }

  public async findByDocument(document: string): Promise<Person | undefined> {
    const person = await this.ormRepository.findOne({ where: { document } });
    return person;
  }

  public async create({
    name,
    document,
    type,
  }: ICreatePersonDTO): Promise<Person> {
    const person = this.ormRepository.create({ name, document, type });
    await this.ormRepository.save(person);
    return person;
  }
}

export default PeopleRepository;
