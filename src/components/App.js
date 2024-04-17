
import React from "react";
import './../styles/App.css';
import { useState } from "react";
const App = () => {
  const [name, setName] = useState('');
  return (
    <div>
        {/* Do not remove the main div */}
        <label>Enter your name :</label>
        <input  onChange={(event) =>  setName('Hello '+ event.target.value + '!')} />
        <p>{name}</p>
    </div>
  )
}

export default App
