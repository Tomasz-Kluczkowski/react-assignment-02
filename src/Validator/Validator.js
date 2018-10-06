import React from 'react'


const validator = (props) => {
    let result = '';
    if (props.inputLength < 5) {
        result = 'Input too short'
    } else {
        result = 'Input long enough'
    }
    return (
        <div>
            <p>{result}</p>
        </div>
    )
};


export default validator