import { GenezioDeploy } from "@genezio/types";

type PersonDetails = {
    firstName: string;
    lastName: string;
    location: string;
}

type HelloWorldResponse = {
    success: boolean;
    message: string;
}

/**
 * This class represents a hello world server that can be deployed on genezio infrastructure
 * using "genezio deploy" command or tested locally using "genezio local".
 */
@GenezioDeploy()
export class HelloWorldService {
  constructor() {
    console.log("Constructor called!")
  }

  /**
   * Method that returns a "Hello world" message.
   */
  // @GenezioMethod({ "type": "jsonrpc" })  
  helloWorld(): string {
    console.log("Hello world request received!")

    return "Hello world!";
  }

  /**
   * Method that returns a personalized "Hello world" message.
   */
  hello(name: string, from: string): string {
    console.log(`Hello world request received with name ${name} from ${from}!`)

    return `Hello, ${name}, from ${from}!`
  }

  helloPerson(person: PersonDetails): HelloWorldResponse {
    console.log(`Hello world request received with person ${JSON.stringify(person)}!`)

    return {
        success: true,
        message: `Hello, ${person.firstName} ${person.lastName}! How's ${person.location}?`
    }
  }
}
