import React from 'react';
import './Person.css';
import WithClass from '../../../hoc/WithClass';
import PropTypes from 'prop-types';

const person = (props) => {
    return (
        <WithClass className='Person'>
            <p onClick={props.click}>
                {props.name} is {props.age} years old!
            </p>
            <input type="textbox" onChange={props.change}/>
        </WithClass>
    )
};

person.PropTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    change: PropTypes.func
};

export default person;