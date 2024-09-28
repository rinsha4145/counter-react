import React, { useState } from "react";

function App() {
  // Declare a state variable called 'count' and a function 'setCount' to update it
  const [count, setCount] = useState(0);

  // Function to increment the count
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement the count
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={styles.container}>
      <h1>Simple Counter App</h1>
      <h2>Count: {count}</h2>
      <div style={styles.buttonContainer}>
        <button onClick={decrement} style={styles.button}>
          -
        </button>
        <button onClick={increment} style={styles.button}>
          +
        </button>
      </div>
    </div>
  );
}

// Basic styling for the app
const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
  },
  buttonContainer: {
    marginTop: "20px",
  },
  button: {
    fontSize: "20px",
    margin: "5px",
    padding: "10px 20px",
  },
};

export default App;
