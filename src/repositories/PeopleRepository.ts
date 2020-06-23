import Person from '../models/Person';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Person)
class PeopleRepository extends Repository<Person> {
  public async findByDocument(document: string): Promise<Person | null> {
    const person = await this.findOne({ where: { document } });

    return person || null;
  }
}

export default PeopleRepository;
