import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app! WOO</h1>
        <Person name='isaac' />
      </div>
    );
  }
}

export default App;
