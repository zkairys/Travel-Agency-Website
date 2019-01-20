import React, { Component } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import axios from 'axios'
import Uppy from '@uppy/core'
import './App.scss'

//componenets 
import Navigation from './components/Navigation'

//views
import Home from './views/Home'
import About from './views/About'
import Blog from './views/Blog'
import Contact from './views/Contact';


class App extends Component {
  state = {
    posts: []
  }

  //get data with axios

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts/')
      .then(res => {
        this.setState({
          posts: res.data.slice(0,10)
        });
      })
      
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <main className="main">
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

