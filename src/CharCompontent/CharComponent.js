import React from 'react';

import './CharComponent.css'

const charcomponent = (props) => {
    return (
        <p className="character" onClick={props.handleDeleteChar}>{props.character}</p>
    )
};

export default charcomponent;