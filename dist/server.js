import express from 'express';
import dotenv from 'dotenv';
import connectDB from './utils/database.js';
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
connectDB();
app.get('/', (req, res) => {
    res.send('Hello, TypeScript!');
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map