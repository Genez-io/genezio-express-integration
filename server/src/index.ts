import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const port = 8881;

// Define a type for the book structure
type Book = {
  id: number;
  title: string;
  author: string;
}

// In-memory store for books
let books: Book[] = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  // Add more book objects as needed
];

app.use(cors());
app.use(express.json());

// GET route to fetch all books
app.get('/books', (_req: Request, res: Response) => {
  res.json(books);
});

// POST route to create a new book
app.post('/books', (req: Request, res: Response) => {
  // Extracting book details from request body
  const { title, author } = req.body;

  if (!title || !author) {
	  res.status(400).json({ "error": "Missing parameter" })
	  return
  }

  // Creating a new book object
  const newBook: Book = {
    id: books.length + 1, // Simple ID generation strategy
    title,
    author,
  };

  // Adding the new book to our in-memory store
  books.push(newBook);

  // Responding with the newly created book
  res.status(201).json(newBook);
});

// Starting the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
