import express, { Request, Response } from 'express';
import dotenv from 'dotenv'
import connectDB from './config/database.js';
import setupSwaggerDocs from './swagger.js';
import routes from './routes/payments.js';


dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

connectDB()
setupSwaggerDocs(app);

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
