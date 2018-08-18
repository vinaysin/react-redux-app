import React from 'react';
import Person from './Person/Person';

const persons = (props) => props.persons.map((person, indexKey) => {
    return <Person                 
                name={person.name} 
                age={person.age} 
                key={person.id} 
                click={() => props.clicked(indexKey) }
                change={(event) => props.changed(event, person.id)}
            />
  });

  export default persons;
