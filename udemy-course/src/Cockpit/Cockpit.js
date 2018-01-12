import React from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {
    let assignedClasses = [];

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }

    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I'm a react app! WOO</h1>
            <p className={assignedClasses.join(' ')}>I'm so cool now</p>
            <button
                onClick={props.buttonClick}
            >Name Switch</button>
        </div>
    );
}

export default cockpit;