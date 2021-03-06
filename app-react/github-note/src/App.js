import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm, TodoList} from './components/todo'

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [
        {id: 1, name: 'learn jsx', isComplete: true},
        {id: 2, name: 'bulid and awesome app', isComplete: false},
        {id: 3, name: 'Ship it!!', isComplete: false}
      ],
      currentTodo: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(evt) {
    this.setState({
      currentTodo: evt.target.value
    })
  }
  render() {
    return (
      <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React todo</h2>
        </div>

        <div className="Todo-App">
          <TodoForm handleInputChange=
            {this.handleInputChange}
            currentTodo={this.state.currentTodo}/>

          <TodoList todos={this.state.todos}/>

        </div>
      </div>
    );
  }
}

export default App;
