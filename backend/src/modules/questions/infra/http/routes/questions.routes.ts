import { Router } from 'express';
import QuestionsController from '../controllers/QuestionsController';

const questionsController = new QuestionsController();

const questionsRouter = Router();

questionsRouter.post('/', questionsController.create);
questionsRouter.get('/', questionsController.index);

export default questionsRouter;
