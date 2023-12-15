/**
* This is an auto generated code. This code should not be modified since the file can be overwritten
* if new genezio commands are executed.
*/

import { Remote } from "./remote";

export type PersonDetails = {firstName: string, lastName: string, location: string};
export type HelloWorldResponse = {success: boolean, message: string};

export class HelloWorldService {
  static remote = new Remote("http://localhost:8881/genezio");

  static async helloWorld(): Promise<string> {
    return await HelloWorldService.remote.call("HelloWorldService.helloWorld");
  }
  static async hello(name: string, from_: string): Promise<string> {
    return await HelloWorldService.remote.call("HelloWorldService.hello", name, from_);
  }
  static async helloPerson(person: PersonDetails): Promise<HelloWorldResponse> {
    return await HelloWorldService.remote.call("HelloWorldService.helloPerson", person);
  }
}

export { Remote };
