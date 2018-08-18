import React from 'react';

const cockpit = (props) => {
    const style = {
        backgroundColor: 'green',
        color: 'white',
        border: '1px solid black',
        padding: '16px',
        cursor: 'pointer'
    };

    const assignedClasses=[];
    if (props.persons.length <= 2) {
        assignedClasses.push('red');
    } else if (props.persons.length <=1) {
        assignedClasses.push('bold');
    }

    if (props.showPersons) {
        style.backgroundColor= 'red';
    }

    return (
        <div>
            <h1 className={assignedClasses.join(' ')}>Hi, I am React Application!</h1>
            <button style={style} onClick={props.togglePersonHandler}>Toggle Persons</button>
        </div>
    );
}

export default cockpit;
