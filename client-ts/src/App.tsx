import { useState, useEffect } from 'react';
import './App.css'
import { createBook, fetchBooks, Book } from './requests';

function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  // Fetch all books when the component mounts
  useEffect(() => {
    const loadBooks = async () => {
      const allBooks = await fetchBooks();
      setBooks(allBooks);
    };

    loadBooks();
  }, []);

  const handleCreateBook = async (e: any) => {
    e.preventDefault(); // Prevent form submission from reloading the page
    if (!title || !author) {
      alert('Please provide both title and author');
      return;
    }

    const newBook = await createBook({ title, author });
    setBooks([...books, newBook]); // Add the new book to the local state

    // Reset the form fields
    setTitle('');
    setAuthor('');
  };

  return (
    <div>
      <h2>Add a New Book</h2>
      <form onSubmit={handleCreateBook}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
          required
        />
        <button type="submit">Add Book</button>
      </form>

      <h2>Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title} by {book.author}</li>
        ))}
      </ul>
    </div>
  );
};

export default App

