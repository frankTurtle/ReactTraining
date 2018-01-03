import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'toby' },
      { name: 'frank' },
      { name: 'isaac' },
    ]
  }

  swithNameHandler = () => {
    // console.log('clicked');
    this.setState({
      persons: [
        { name: 'frank' },
        { name: 'isaac' },
        { name: 'toby' },
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app! WOO</h1>
        <button onClick={this.swithNameHandler}>Name Switch</button>
        <Person
          name={this.state.persons[0].name}
          click={this.swithNameHandler}
         />
        <Person name={this.state.persons[1].name} />
        <Person name={this.state.persons[2].name}>Hobbies: racing!</Person>
      </div>
    );
  }
}

export default App;
