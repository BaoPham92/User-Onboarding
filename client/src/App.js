import React from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './Components/Form'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      {/* // * FORM COMPONENTED RENDER HERE
       */}
      <Form />
    </div>
  );
}

export default App;
