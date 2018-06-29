import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';

class App extends Component {
  render() {
    console.log('wew laddy');
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
