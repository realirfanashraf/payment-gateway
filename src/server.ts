import express, { Request, Response } from 'express';
import dotenv from 'dotenv'
import connectDB from './utils/database.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

connectDB()

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
