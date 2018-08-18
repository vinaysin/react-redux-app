import React, { Component } from "react";
import "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import WithClass from "../hoc/WithClass";

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Vinay", age: 42 },
      { id: 2, name: "Pragya", age: 32 },
      { id: 3, name: "Samriddhi", age: 9 }
    ],
    showPersons: false
  };

  togglePersonHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  chagePersonHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    let person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons });
  };

  deletePersonHandler = indexKey => {
    let persons = [...this.state.persons];
    persons.splice(indexKey, 1);
    this.setState({ persons });
  };

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.chagePersonHandler}
        />
      );
    }

    return (
      <WithClass className="App">
        <Cockpit
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          togglePersonHandler={this.togglePersonHandler}
        />
        {persons}
      </WithClass>
    );
  }
}

export default App;
