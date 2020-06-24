import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreatePersonService from '@modules/people/services/CreatePersonService';

export default class PeopleController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const createPersonService = container.resolve(CreatePersonService);
      const person = await createPersonService.execute(request.body);
      return response.json(person);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}
