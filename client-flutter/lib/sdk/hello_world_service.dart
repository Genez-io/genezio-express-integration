/// This is an auto generated code. This code should not be modified since the file can be overwritten
/// if new genezio commands are executed.

import 'remote.dart';
import './models/models.dart';



class PersonDetails {
    String firstName;
    String lastName;
    String location;

    PersonDetails(this.firstName,this.lastName,this.location,);

    factory PersonDetails.fromJson(Map<String, dynamic> json) => PersonDetails(json['firstName'] as String,json['lastName'] as String,json['location'] as String,);

    Map<String, dynamic> toJson() => <String, dynamic>{"firstName": firstName,"lastName": lastName,"location": location,};
}


class HelloWorldResponse {
    bool success;
    String message;

    HelloWorldResponse(this.success,this.message,);

    factory HelloWorldResponse.fromJson(Map<String, dynamic> json) => HelloWorldResponse(json['success'] as bool,json['message'] as String,);

    Map<String, dynamic> toJson() => <String, dynamic>{"success": success,"message": message,};
}


class HelloWorldService {
  static final remote = Remote("http://localhost:8881/genezio");

  static Future<String> helloWorld() async {
    final response = await remote.call("HelloWorldService.helloWorld", []);

    return response as String;
  }

  static Future<String> hello(String name, String from) async {
    final response = await remote.call("HelloWorldService.hello", [name, from]);

    return response as String;
  }

  static Future<HelloWorldResponse> helloPerson(PersonDetails person) async {
    final response = await remote.call("HelloWorldService.helloPerson", [person]);

    return HelloWorldResponse.fromJson(response as Map<String, dynamic>);
  }

}
