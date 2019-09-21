import React, { Component } from 'react';
import Product from './Product';
import Student from './student';
import ButtonTodos from './button'
import Axios from 'axios';
export default class App extends Component {

  state = { 
    todos: [],
  }

  componentWillMount () {
    fetch("http://localhost:3000/posts")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({ todos: result });
        }
      )
  }

  render() {
    return (
      <div className="App">
        <Student todos={this.state.todos} />
        <ButtonTodos onAdd={(name, old) => this._onAdd(name, old)} />
      </div>
    )
  }

  _onAdd = (name, old) => {
    Axios.post('http://localhost:3000/posts', { name, old }).then(({ data }) => {
      this.setState(preState => ({
        todos: [ ...preState.todos, data ]
      }))
    });
  }
}
