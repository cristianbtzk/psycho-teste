import { Router } from 'express';
import TestsController from '../controllers/TestsController';

const testsController = new TestsController();

const testssRouter = Router();

testssRouter.post('/', testsController.create);
// testssRouter.get('/', testsController.index);

export default testssRouter;
