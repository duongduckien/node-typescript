import express from 'express';
import http from 'http';
import os from 'os';

import { Routes } from './routes/index';
import { applyMiddleware, env } from './utils';
import middleware from './middleware';

const app = express();
applyMiddleware(middleware, app);

const PORT = env.PORT || 3333;

Routes.init(app, express.Router());

const server = http.createServer(app);
server.listen(PORT, () => console.log(`${os.hostname()} Running on port ${PORT}`));
