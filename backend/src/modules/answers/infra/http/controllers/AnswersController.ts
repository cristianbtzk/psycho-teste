import ListAnswersService from '@modules/answers/services/ListAnswersService';

import { Request, Response } from 'express';

export default class AnswersController {
  async index(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.params;

    const listAnswers = new ListAnswersService();

    const answers = await listAnswers.execute(parseInt(user_id, 10));

    return response.json(answers);
  }
}
