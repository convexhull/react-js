import React, { Component } from 'react';
import classes from './App.module.css';                             //Webpack allows us to import CSS files into JS files. 
import Persons from './../components/Persons/Persons';
import Cockpit from './../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons : [
      {id : 'afd', name: 'Alpha', age : '28'},
      {  id : 'dfjsdkf' ,name : 'Bravo', age : '27'},
      {id : 'afj', name : 'Charlie', age : '25'}
    ],
    otherState : 'some other value',
    showPersons : false
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons});
  } 

  nameChangedHandler = (event ,id) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    });
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const  persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons});                                        //... to copy array/object !!!        //Object.assign({},obj) to copy object!!
  }                                       
  togglePersonsHandler = ()=> {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons : !doesShow
    });
  }

  render() {  
    let persons = null;  
    
    if(this.state.showPersons) {
      persons = (  
        <Persons 
          persons = {this.state.persons} 
          clicked = {this.deletePersonHandler}
          changed = {this.nameChangedHandler} />
      ); 
    }                                                //Standard way to conditionally render elements. Keep the display logic outside the JSX block in render().
    return (   
      <div className={classes.App}>
        <Cockpit 
          showPersons={this.state.showPersons} 
          persons = {this.state.persons}
          clicked = {this.togglePersonsHandler} />
        {persons}                                                        
      </div>
    );
    // return React.createElement('div', {className : 'App' }, React.createElement('h1', null, 'Hi I\'m a React App'));
    // No complex elements inside this { dynamic content brace }
  }
}

export default App;
