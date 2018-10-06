import React from 'react';

import './CharComponent.css'

const charcomponent = (props) => {
    return (
        <p className="character">{props.character}</p>
    )
};

export default charcomponent;