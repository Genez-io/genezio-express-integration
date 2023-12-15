import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { HelloWorldService, PersonDetails } from "./sdk/helloWorldService.sdk";
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState(""); // State to hold the message

  const fetchHelloWorld = () => {
    HelloWorldService.helloWorld().then(response => {
      setMessage(response); // Set the received message
    }).catch(error => {
      console.error("Error fetching hello world message", error);
      setMessage("Failed to fetch message"); // Error handling
    });
  };
 
  const fetchHelloWorldWithPersonalDetails= () => {
    const person: PersonDetails = { firstName: "Happy", lastName: "Capybara", location: "London" };
    HelloWorldService.helloPerson(person).then(response => {
        if (response.success) {
            setMessage(response.message); // Set the received message
        } else {
            setMessage("Failed to fetch message"); // Error handling
        }
    }).catch(error => {
      console.error("Error fetching hello world message", error);
      setMessage("Failed to fetch message"); // Error handling
    });
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={fetchHelloWorld}>Get Hello World</button> {/* New button */}
        <button onClick={fetchHelloWorldWithPersonalDetails}>Say hi to Capybara!</button> {/* New button */}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        {message && <p>Message: {message}</p>} {/* Display the message */}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

