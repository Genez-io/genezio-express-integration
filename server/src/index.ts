import express from 'express';
import { createExpressRouter } from "@genezio/adapters";
import cors from 'cors';
import { BookService } from './books.js';

const app = express();
const port = 8881;

app.use(cors());
app.use(express.json());

// POST route to create a new book
app.post('/genezio', createExpressRouter([BookService]));

// Starting the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
