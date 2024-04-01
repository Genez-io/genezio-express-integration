import axios from 'axios';

// Define the interface for a book
export type Book = {
  id?: number; // Optional because it won't be needed for the POST request's body
  title: string;
  author: string;
}

// Function to fetch all books
export async function fetchBooks(): Promise<Book[]> {
  try {
    const response = await axios.get<Book[]>('http://localhost:8881/books');
    console.log(response.data); // Logs the array of books
    return response.data
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};

// Function to create a new book
export async function createBook(newBook: Book): Promise<Book> {
  try {
    const response = await axios.post<Book>('http://localhost:8881/books', newBook);
    console.log(response.data); // Logs the newly created book
    return response.data
  } catch (error) {
    console.error('Error creating book:', error);
    throw error;
  }
};

