type Book = {
  id: number;
  title: string;
  author: string;
}

/**
 * A service that provides operations for managing books. 
 * @class BookService
 */
// genezio: deploy
export class BookService {
	books: Book[] = []

	/**
	* Retrieves all books from the store.
	* 
	* @returns {Promise<Book[]>} A promise that resolves with an array of Book objects.
	*/
	async getAllBooks(): Promise<Book[]> {
		return this.books;
	}
	
	/**
	* Creates a new book and adds it to the store. 
	* @param {string} title - The title of the book. 
	* @param {string} author - The author of the book.
	* @returns {Promise<Book>} A promise that resolves with the newly created Book object.
	*/
	async createBook(title: string, author: string): Promise<Book> {
        if (!title || !author) {
            throw new Error('Title and author are required.');
        }

		 const newBook: Book = {
		    id: this.books.length + 1, // Simple ID generation strategy
		    title,
		    author,
		 };

		 // Adding the new book to our in-memory store
		 this.books.push(newBook);

		return newBook;
	}
}
