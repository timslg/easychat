import express, { Express, Request, Response } from 'express';
import messageRouter from './routes/messages.route';
import Websocket from './websocket/websocket';

var cors = require('cors');


const app: Express = express();
const port = 3000;

const http = require('http').createServer(app);
const io = Websocket.getInstance(http);

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.use('/messages', messageRouter)

http.listen(3000, () => {
  console.log('listening on *:3000');
});