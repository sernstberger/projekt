import * as React from 'react';
import './App.css';

import Card from '@material-ui/core/Card';

import logo from './logo.svg';

class Foo extends React.Component {
  public render() {
    return (
      <div className="Foo">
        <header className="Foo-header">
          <img src={logo} className="Foo-logo" alt="logo" />
          <h1 className="Foo-title">Foooooooo</h1>
        </header>
        <Card>
          <p className="Foo-intro">
            To get started, edit <code>src/Foo.tsx</code> and save to reload.
          </p>
        </Card>
      </div>
    );
  }
}

export default Foo;
