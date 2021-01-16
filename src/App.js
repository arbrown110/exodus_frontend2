import mama from './mama.gif';
import './App.css';
import CategoriesContainer from './containers/CategoriesContainer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Navigation from './components/Navigation'
import IngredientsContainer from './containers/IngredientsContainer'
import IngredientMealsList from './containers/IngredientMealsList'

function App() {
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
          <Route exact path="/categories" component={CategoriesContainer} />
          <Route exact path="/ingredients" component={IngredientsContainer} />
          <Route exact path="/ingredients/:id" component={IngredientMealsList} />

        </Switch>
      </div>
      </Router>
    </div>
  );
}

export default App;
