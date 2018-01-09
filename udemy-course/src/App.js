import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id='adsf', name: 'toby' },
      { id='adasf', name: 'frank' },
      { id='fsadfads', name: 'isaac' },
    ],
    showPersons: false
  }

  deletePerson = (personIndex) => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'asdf' },
        { name: event.target.value },
        { name: 'zxcv' },
      ]
    });
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              click={() => this.deletePerson(index)}
              key={person.id}
            />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a react app! WOO</h1>

        <button
          style={style}
          onClick={this.togglePersonsHandler}
        >Name Switch</button>
        {persons}
      </div>
    );
  }
}

export default App;
