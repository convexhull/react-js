import React from 'react';
import classes from './Cockpit.module.css';
const cockpit = (props) => {
    console.log('ash');
    let btnClass = '';
    if(props.showPersons) {
        btnClass = classes.Red;
    }
    
    const assignedClasses = [];
    if(props.persons.length <=2){
      assignedClasses.push(classes.red);
    }
    if(props.persons.length<=1){
      assignedClasses.push(classes.bold);
    }   
    console.log(classes.red);

    return (
        <div className={classes.Cockpit}>
            <h1>Hi I'm React App</h1>
            <p className = {assignedClasses.join(' ')}>This is really working !</p>
            <button  className = {btnClass} onClick = {props.clicked}  >Toggle Persons</button>
        </div>     
    );
    
}

export default cockpit;