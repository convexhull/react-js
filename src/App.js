import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      { name: 'Alpha', age : '28'},
      { name : 'Bravo', age : '27'},
      { name : 'Charlie', age : '25'}
    ]
  };

  switchNameHandler = () => {
    // console.log('Was clicked!');
    // DONT'T do this => this.state.persons[0].name = "Maximilian";
    this.setState( {
      persons : [
        { name: 'Yash', age : '28'},
        { name : 'Bravo', age : '27'},
        { name : 'Charlie', age : '21'}
      ]
    }); 
  }

  render() {
    return (
      <div className="App">
        <h1>Hi I'm React App</h1>
        <p>This is really working !</p>
        <button onClick = {this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age = {this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age = {this.state.persons[1].age} click= {this.switchNameHandler} >My hobbies are: Skiing</Person>
        <Person name={this.state.persons[2].name} age = {this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className : 'App' }, React.createElement('h1', null, 'Hi I\'m a React App'));
  }
}

export default App;
