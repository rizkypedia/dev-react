import React from "react";

const people = [
    'Lionel Messi',
    'Cristiano Ronaldo',
    'Ilkay Gündogan',
    'Mo Salah',
    'Darwin Nunez',
    'Cody Gackpo'
];

function List() {
    const listItems = people.map(person => <li>{person}</li>);
    return <ul>{listItems}</ul>
}

export default List;