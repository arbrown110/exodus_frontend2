import mama from './mama.gif';
import './App.css';
import AdventuresContainer from './containers/AdventuresContainer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Navigation from './components/Navigation'
import EventsContainer from './containers/EventsContainer'
import EventsList from './containers/EventsList'

import React from 'react';

class App extends React.Component {
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={mama} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/adventures" component={AdventuresContainer} />
          <Route exact path="/events" component={EventsContainer} />
          <Route exact path="/events/:id" component={EventsList} />

        </Switch>
      </div>
      </Router>
    </div>
  );
}
}

export default App;
