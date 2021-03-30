import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Login} from './components/loginComponent/Login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  
  return (
    <Router >
      <div className="App">
        <header className="App-header">
          <Login/>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
        
        </header>
      </div>
    </Router>
  );
}

export default App;
