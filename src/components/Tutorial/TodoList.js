import React from "react";

const today = new Date()

const person = {
    name: 'Gregorio Y. Zara',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
};
function formatDate(date) {
    return new Intl.DateTimeFormat(
        'en-US',
        {wekkday: 'long'}
    ).format(date)
}

function TodoList () {
    return (
        <div style={person.theme}>
            <h1>{person.name}</h1>
            <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
        </div>
    )
}

export default TodoList