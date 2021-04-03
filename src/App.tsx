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
          <Login/>
      </div>
    </Router>
  );
}

export default App;
