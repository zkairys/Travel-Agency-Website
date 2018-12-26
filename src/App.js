import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <main class="main">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/blog' component={Blog} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

