/**
* This is an auto generated code. This code should not be modified since the file can be overwritten
* if new genezio commands are executed.
*/

import { Remote } from "./remote";


export class HelloWorldService {
  static remote = new Remote("undefined");

  static async helloWorld(): Promise<any> {
    return await HelloWorldService.remote.call("HelloWorldService.helloWorld");
  }
  static async hello(name: any, from_: any): Promise<any> {
    return await HelloWorldService.remote.call("HelloWorldService.hello", name, from_);
  }
}

export { Remote };
