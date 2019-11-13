import React from 'react';
import logo from './logo.svg';
import Landing from './pages/Landing'
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
