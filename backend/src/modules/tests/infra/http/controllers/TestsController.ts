import CreateTestService from '@modules/tests/services/CreateTestService';
import ListTestsService from '@modules/tests/services/ListTestsService';
import { Request, Response } from 'express';

export default class TestsController {
  async create(request: Request, response: Response): Promise<Response> {
    const { name, email, answers } = request.body;

    const createTest = new CreateTestService();

    const test = await createTest.execute({ name, email, answers });

    return response.json(test);
  }

  async index(request: Request, response: Response): Promise<Response> {
    const { page } = request.params;

    const listTests = new ListTestsService();

    const tests = await listTests.execute(parseInt(page, 10));

    return response.json(tests);
  }
}
