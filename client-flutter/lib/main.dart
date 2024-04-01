import 'package:flutter/material.dart';
import 'dart:convert';
import 'package:http/http.dart' as http;

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

class Book {
  final int? id;
  final String title;
  final String author;

  Book({this.id, required this.title, required this.author});

  factory Book.fromJson(Map<String, dynamic> json) {
    return Book(
      id: json['id'],
      title: json['title'],
      author: json['author'],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'title': title,
      'author': author,
    };
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
    final response = await http.get(Uri.parse('http://localhost:8881/books'));
    if (response.statusCode == 200) {
      List jsonResponse = json.decode(response.body);
      setState(() {
        _books = jsonResponse.map((book) => Book.fromJson(book)).toList();
      });
    } else {
      print('Failed to load books');
    }
  }

  Future<void> createBook(Book newBook) async {
    final response = await http.post(
      Uri.parse('http://localhost:8881/books'),
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: jsonEncode(newBook.toJson()),
    );
    if (response.statusCode == 201) {
      fetchBooks(); // Reload the books after adding a new one
    } else {
      print('Failed to add book');
    }
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
              createBook(Book(title: _titleController.text, author: _authorController.text));
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
