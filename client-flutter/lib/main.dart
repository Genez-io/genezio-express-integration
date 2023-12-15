import 'package:flutter/material.dart';
import 'package:genezio_adapter_example_flutter_client/sdk/hello_world_service.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: const MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  String _response = '';

  void _makeRequest() {
    HelloWorldService.helloWorld().then((response) {
      setState(() {
        _response = response;
      });
    });
  }

  void _makeRequestWithPersonalDetails() {
      var person = PersonDetails("Happy", "Capybara", "London");

      HelloWorldService.helloPerson(person).then((response) {
          setState(() {
         if (response.success) {
           _response = response.message; // Set the received message
         } else {
           _response = "Failed to fetch message"; // Error handling
         }
        });
      }).catchError((error) {
          print("Error fetching hello world message: $error");
          setState(() => _response = "Failed to fetch message"); // Error handling
      });
  }

@override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            const Text(
              'Response from HelloWorldService:',
            ),
            Text(
              _response,
              style: Theme.of(context).textTheme.headlineMedium,
            ),
          ],
        ),
      ),
      floatingActionButton: Column(
        mainAxisAlignment: MainAxisAlignment.end,
        children: [
          FloatingActionButton(
            onPressed: _makeRequest,
            tooltip: 'Make Request',
            child: const Icon(Icons.send),
          ),
          SizedBox(height: 10), // Add some space between the buttons
          FloatingActionButton(
            onPressed: _makeRequestWithPersonalDetails,
            tooltip: 'Send Request to Personal Details',
            child: const Icon(Icons.person),
          ),
        ],
      ),
    );
  }
}

