import { Router } from 'express';
import AnswersController from '../controllers/AnswersController';

const answersController = new AnswersController();

const answersRouter = Router();

answersRouter.get('/:user_id', answersController.index);

export default answersRouter;
