import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {FilterableProductTable} from './components/FilterableProductTable';

class App extends Component {
  constructor() {
    super()
    this.nombre = "Ramiro Ruiz"
  }



  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <FilterableProductTable />
        <p> {this.nombre}</p>
      </div>
    );
  }
}

export default App;
