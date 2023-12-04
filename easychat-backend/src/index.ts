import express, { Express, Request, Response } from 'express';
import messageRouter from './routes/messages.route';

const app: Express = express();
const port = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.use('/messages', messageRouter)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});