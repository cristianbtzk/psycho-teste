import CreateTestService from '@modules/tests/services/CreateTestService';
// import ListQuestionsService from '@modules/tests/services/ListQuestionsService';
import { Request, Response } from 'express';

export default class TestsController {
  async create(request: Request, response: Response): Promise<Response> {
    const { name, email, answers } = request.body;

    const createTest = new CreateTestService();

    const test = await createTest.execute({ name, email, answers });

    return response.json(test);
  }

  /*  async index(request: Request, response: Response): Promise<Response> {
    const listQuestions = new ListQuestionsService();

    const questions = await listQuestions.execute();

    return response.json(questions);
  } */
}
