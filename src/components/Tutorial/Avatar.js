import React from "react";

import {getImageUrl} from './../../lib/utils.js'

function Avatar({person, size}) {
    const avatar = 'https://i.imgur.com/7vQD0fPs.jpg'
    const description = 'Greogorio Y. Zara'
    return (
        <img
        className="avatar"
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
      />
    )
}

export default Avatar