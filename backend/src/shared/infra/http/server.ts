import 'reflect-metadata';
import cors from 'cors';
import '@shared/infra/typeorm/index';

import express from 'express';
import routes from './routes';

const server = express();
server.use(cors());

server.use(express.json());
server.use(routes);
server.listen(3333);
