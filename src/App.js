import React, {Component} from 'react';
import './App.css';

class App extends Component {

    state = {
        inputs: {
            inputLength: 0,
            inputValue: ''
        }
    };

    setParagraphLength = (event) => {
        const inputs = {...this.state.inputs};
        console.log(inputs);
        console.log(event.target.value);
        inputs.inputValue = event.target.value;
        inputs.inputLength = inputs.inputValue.length;
        this.setState(
            {inputs: inputs}
        )
    };


    render() {
        return (
            <div className="App">
                <input type="text"
                       onChange={(event) => this.setParagraphLength(event)}
                       value={this.state.inputs.inputValue}/>
                <p>Input length is: {this.state.inputs.inputLength}</p>
            </div>
        );
    }
}

export default App;
