/**
* This is an auto generated code. This code should not be modified since the file can be overwritten
* if new genezio commands are executed.
*/

import { Remote } from "./remote.js"

export class HelloWorldService {
  static remote = new Remote("http://localhost:8881/genezio")

  static async helloWorld() {
    return HelloWorldService.remote.call("HelloWorldService.helloWorld")
  }

  static async hello(name, from) {
    return HelloWorldService.remote.call("HelloWorldService.hello", name, from)
  }

}
