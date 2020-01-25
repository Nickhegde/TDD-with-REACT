import React, { useState } from 'react';
import { InputForm } from './components';
import logo from './logo.svg';
import './App.css';

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="App">
      {showForm ? <InputForm></InputForm> :
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div
            className="App-link"
            onClick={() => { setShowForm(true) }}
          >
            Show Form
        </div>
        </header>
      }
    </div>
  );
}

export default App;
