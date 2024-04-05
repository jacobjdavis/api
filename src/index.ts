import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors, { CorsOptions } from 'cors';
import helmet from 'helmet';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

const corsOptions: CorsOptions = {
  origin: true,
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(helmet());
app.use(cors(corsOptions));

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server! Now on Docker!');
});

const getQuote = async () => {
  const response = await fetch('https://animechan.xyz/api/random');
  const data = await response.json();
  return data;
};

const getQuotes = async () => {
  const response = await fetch('https://animechan.xyz/api/quotes');
  const data = await response.json();
  return data;
};

app.get('/quote', (req: Request, res: Response) => {
  getQuote().then(data => res.send(JSON.stringify(data)));
});

app.get('/quotes', (req: Request, res: Response) => {
  getQuotes().then(data => res.send(JSON.stringify(data)));
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
