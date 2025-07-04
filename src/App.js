import './App.css';
import Counter from './counter';
import { useState } from 'react';

function App() {
  const[darkMode, setDarkMode] = useState(false);
  const [name, setName] = useState("");
  return (
    <div className={darkMode ? "container dark" : "container"}>
      <h1>Click Counter App</h1>
      <input
      type="text"
      placeholder="Enter your name:"
      value={name}
       onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name ? name : "User"}</p>
      <button className="mode btn" onClick ={() => setDarkMode(!darkMode)}>
      {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode "}
      </button>
        <Counter />
    </div>
  );
}

export default App;