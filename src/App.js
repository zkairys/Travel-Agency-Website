import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Home from './views/Home';
import About from './views/About';
import Blog from './views/Blog';
import Contact from './views/Contact';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <main class="main">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/blog' component={Blog} />
              <Route path='/contact' component={Contact} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

