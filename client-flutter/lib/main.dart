import 'package:flutter/material.dart';
import 'dart:convert';
import 'package:http/http.dart' as http;
import './sdk/book_service.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Book Manager',
      home: BookManager(),
    );
  }
}

class BookManager extends StatefulWidget {
  @override
  _BookManagerState createState() => _BookManagerState();
}

class _BookManagerState extends State<BookManager> {
  final TextEditingController _titleController = TextEditingController();
  final TextEditingController _authorController = TextEditingController();
  List<Book> _books = [];

  @override
  void initState() {
    super.initState();
    fetchBooks();
  }

  Future<void> fetchBooks() async {
    BookService.getAllBooks().then((books) {
      setState(() {
        _books = books;
      });
    });
  }

  Future<void> createBook(String title, String author ) async {
    BookService.createBook(title, author).then((_) {
      fetchBooks();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Book Manager'),
      ),
      body: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: TextField(
              controller: _titleController,
              decoration: InputDecoration(
                labelText: 'Title',
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: TextField(
              controller: _authorController,
              decoration: InputDecoration(
                labelText: 'Author',
              ),
            ),
          ),
          ElevatedButton(
            onPressed: () {
              createBook(_titleController.text, _authorController.text);
              _titleController.clear();
              _authorController.clear();
            },
            child: Text('Add Book'),
          ),
          Expanded(
            child: ListView.builder(
              itemCount: _books.length,
              itemBuilder: (context, index) {
                return ListTile(
                  title: Text(_books[index].title),
                  subtitle: Text('By ${_books[index].author}'),
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}
