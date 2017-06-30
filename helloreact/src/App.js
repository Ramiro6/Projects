import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Route, Link, hashHistory } from 'react-router';

const Home = () => <div><h1>Home</h1></div>;
const About = () => <div><h1>About</h1></div>;
const Contact = () => <div><h1>Contact</h1></div>;

class App extends Component {
  constructor(){
    super()
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
        </p>
        <Router history={ hashHistory }>
          <Route path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
        </Router>
      </div>
    );
  }
}


export default App;
