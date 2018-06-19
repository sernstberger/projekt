import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Blah from './Blah';
import Foo from './Foo';

class Main extends React.Component {
  public render() {
    return (
      <main>
        <Switch>
          <Route exact={true} path='/' component={Foo}/>
          <Route path='/blah' component={Blah}/>
        </Switch>
      </main>
    )
  }
}

export default Main;
