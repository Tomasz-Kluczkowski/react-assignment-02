import React, {Component} from 'react';
import uuidv4 from '../node_modules/uuid/v4'
import './App.css';
import Validator from './Validator/Validator'
import CharComponent from './CharCompontent/CharComponent'

class App extends Component {

    state = {
        inputs: {
            inputValue: ''
        }
    };

    setParagraphLength = (event) => {
        const inputs = {...this.state.inputs};
        inputs.inputValue = event.target.value;
        this.setState(
            {inputs: inputs}
        )
    };

    handleDeleteChar = (index) => {
        const inputs = this.state.inputs;
        const inputArray = inputs.inputValue.split('');
        inputArray.splice(index, 1);
        inputs.inputValue = inputArray.join('');
        this.setState(
            {inputs: inputs}
        )
    };


    render() {
        const inputLength = this.state.inputs.inputValue.length
        const characters = (
            <div>
                {this.state.inputs.inputValue.split('').map((char, index) => {
                    return (
                        <CharComponent
                            handleDeleteChar={() => this.handleDeleteChar(index)}
                            character={char}
                            key={'char_' + uuidv4()}/>
                    )
                })}
            </div>
        );

        return (
            <div className="App">
                <input type="text"
                       onChange={(event) => this.setParagraphLength(event)}
                       value={this.state.inputs.inputValue}/>
                <p>Input length is: {inputLength}</p>
                <Validator inputLength={inputLength}/>
                {characters}
            </div>
        );
    }
}

export default App;
