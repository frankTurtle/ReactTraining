import React, { Component } from 'react';
import classes from './App.css';
import Persons from './Persons/Persons';
import Cockpit from './Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: 'adsf', name: 'toby' },
      { id: 'adasf', name: 'frank' },
      { id: 'fsadfads', name: 'isaac' },
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


    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            click={this.deletePerson}
          />
        </div>
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          persons={this.state.persons}
          buttonClick={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
