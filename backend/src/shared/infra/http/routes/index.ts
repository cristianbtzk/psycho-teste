import { Router } from 'express';
import testsRouter from '@modules/tests/infra/http/routes/tests.routes';
import answersRouter from '@modules/answers/infra/http/routes/answers.routes';

const routes = Router();

routes.use('/tests', testsRouter);
routes.use('/answers', answersRouter);

export default routes;
