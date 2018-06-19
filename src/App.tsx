import * as React from 'react';
import './App.css';

import Card from '@material-ui/core/Card';

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Projekt</h1>
        </header>
        <Card>
          <p className="App-intro">
            To get started, edit <code>src/App.tsx</code> and save to reload.
          </p>
        </Card>
      </div>
    );
  }
}

export default App;
