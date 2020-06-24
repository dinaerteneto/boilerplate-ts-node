import { container } from 'tsyringe';
import IPeopleRepository from '@modules/people/repositories/IPeopleRepository';
import PeopleRepository from '@modules/people/infra/typeorm/repositories/PeopleRepository';

container.registerSingleton<IPeopleRepository>(
  'PeopleRepository',
  PeopleRepository
);
