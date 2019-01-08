import React, { Component } from 'react';
import './App.css';                             //Webpack allows us to import CSS files into JS files. 
import Person from './Person/Person';


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
    this.setState({persons});
  }                                            //... to copy array/object !!!        //Object.assign({},obj) to copy object!!
  togglePersonsHandler = ()=> {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons : !doesShow
    });
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color : 'white',
      font : 'inherit',
      border : '1px solid blue',
      padding : '8px',
      cursor : 'pointer',
    
    }

    let classes = [];
    if(this.state.persons.length <=2){
      classes.push('red');
    }
    if(this.state.persons.length<=1){
      classes.push('bold');
    }

    let persons = null;                //Standard way to conditionally render elements. Keep the display logic outside the JSX block in render().
    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map( (person,index) => {
            return <Person click = {()=>this.deletePersonHandler(index)} name = {person.name} age = {person.age} key = {person.id} changed = {(event)=>this.nameChangedHandler(event, person.id)} />
          })}
        </div> 
      )
      style.backgroundColor = 'red';
    }
    return (   
      <div className="App">
        <h1>Hi I'm React App</h1>
        <p className = {classes.join(' ')}>This is really working !</p>
        <button style = {style} onClick = {this.togglePersonsHandler}  >Toggle Persons</button>
        {persons}                                                        
      </div>
    );
    // return React.createElement('div', {className : 'App' }, React.createElement('h1', null, 'Hi I\'m a React App'));
    // No complex elements inside this { dynamic content brace }
  }
}

export default App;
