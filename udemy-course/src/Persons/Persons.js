import React from 'react';

import Person from '../Person/Person';

const persons = (props) => {
    return (
        props.persons.map((person, index) => {
            return <Person
                name={person.name}
                click={() => props.click(index)}
                key={person.id}
            />
        })
    );
}

export default persons;