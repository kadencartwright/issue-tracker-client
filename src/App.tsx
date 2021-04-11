import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Login} from './components/loginComponent/Login'
import ProvideAuth from './components/ProvideAuth'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { Nav } from './components/navComponent/Nav';
function App() {
  
  const loginContainer = ()=>(
    <div>
      <Route exact path='/' render={()=><Redirect to='/login'/>} />
      <Route path='/login' component={Login}/>
    </div>
  )
  const defaultContainer = ()=>(
    <div>
      <Nav/>
    </div>
  )


  return (
    <div className="App">
      <ProvideAuth>
        <Router>
          <Switch>
            <Route exact path='/login' component={loginContainer}/>
            <Route component={defaultContainer}/>
          </Switch>
        </Router>
      </ProvideAuth>
    </div>
  );
}

export default App;
