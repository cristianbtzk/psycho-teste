import CreateQuestionService from '@modules/questions/services/CreateQuestionService';
import ListQuestionsService from '@modules/questions/services/ListQuestionsService';
import { Request, Response } from 'express';

export default class QuestionsController {
  async create(request: Request, response: Response): Promise<Response> {
    const { html, type, answer } = request.body;

    const createQuestion = new CreateQuestionService();

    const question = await createQuestion.execute({ answer, html, type });

    return response.json(question);
  }

  async index(request: Request, response: Response): Promise<Response> {
    const listQuestions = new ListQuestionsService();

    const questions = await listQuestions.execute();

    return response.json(questions);
  }
}
