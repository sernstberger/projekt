import * as React from 'react';
import './App.css';

import Card from '@material-ui/core/Card';

import logo from './logo.svg';

class Blah extends React.Component {
  public render() {
    return (
      <div className="Blah">
        <header className="Blah-header">
          <h1 className="Blah-title">Blahoooooo</h1>
        </header>
        <Card>
          <p className="Blah-intro">
            To get started, edit <code>src/Blah.tsx</code> and save to reload.
          </p>
        </Card>
      </div>
    );
  }
}

export default Blah;
