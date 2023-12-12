import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import http, { Server } from 'http';
import messagesRouter from './routes/messages.route';
import usersRouter from './routes/users.route';
import Websocket from './websocket/websocket';

const app: Express = express();
const port: number = 3000;

const server: Server = http.createServer(app);
const io: Websocket = Websocket.getInstance(server);

app.use(cors());
app.use(express.json());

app.use('/messages', messagesRouter);
app.use('/users', usersRouter);

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});