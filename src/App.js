import React, {Component} from 'react';
import './App.css';
import Validator from './Validator/Validator'
import CharComponent from './CharCompontent/CharComponent'

class App extends Component {

    state = {
        inputs: {
            inputLength: 0,
            inputValue: ''
        }
    };

    setParagraphLength = (event) => {
        const inputs = {...this.state.inputs};
        inputs.inputValue = event.target.value;
        inputs.inputLength = inputs.inputValue.length;
        this.setState(
            {inputs: inputs}
        )
    };


    render() {
        const characters = (
            <div>
                {this.state.inputs.inputValue.split('').map((char, index) => {
                    return (
                        <CharComponent character={char} key={index}/>
                    )
                })}
            </div>
        );

        return (
            <div className="App">
                <input type="text"
                       onChange={(event) => this.setParagraphLength(event)}
                       value={this.state.inputs.inputValue}/>
                <p>Input length is: {this.state.inputs.inputLength}</p>
                <Validator inputLength={this.state.inputs.inputLength}/>
                {characters}
            </div>
        );
    }
}

export default App;
