import Person from '../infra/typeorm/entities/Person';
import ICreatePersonDTO from '../dtos/ICreatePersonDTO';

export default interface IPeopleRepository {
  create(data: ICreatePersonDTO): Promise<Person>;
  findByDocument(document: string): Promise<Person | undefined>;
}
