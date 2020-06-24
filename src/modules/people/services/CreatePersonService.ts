import ICreatePersonDTO from '../dtos/ICreatePersonDTO';
import IPeopleRepository from '../repositories/IPeopleRepository';
import Person from '../infra/typeorm/entities/Person';
import { injectable, inject } from 'tsyringe';

@injectable()
class CreatePersonService {
  constructor(
    @inject('PeopleRepository')
    private peopleRepository: IPeopleRepository
  ) {}

  public async execute({
    name,
    document,
    type,
  }: ICreatePersonDTO): Promise<Person> {
    const findPerson = await this.peopleRepository.findByDocument(document);
    if (findPerson) {
      throw Error('This person is already exists.');
    }

    const person = await this.peopleRepository.create({ name, document, type });

    return person;
  }
}

export default CreatePersonService;
