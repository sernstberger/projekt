import * as React from 'react';
import './App.css';

import { Link } from 'react-router-dom'

import logo from './logo.svg';

import Main from './Main';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Projekt</h1>
          <Link to="/">Foo</Link>
          <Link to="/blah">Blah</Link>
        </header>
        <Main />
      </div>
    );
  }
}

export default App;
