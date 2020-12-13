import { Router } from 'express';
import testsRouter from '@modules/tests/infra/http/routes/tests.routes';

const routes = Router();

routes.use('/tests', testsRouter);

export default routes;
