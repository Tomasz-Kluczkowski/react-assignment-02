import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
      inputLength: 0,
      inputValue: ''
  };

  setParagraphLength = (event) => {
    const state = {...this.state}
    console.log(event.target.value)

  };


  render() {
    return (
      <div className="App">
          <input type="text" onChange={(event) => this.setParagraphLength (event)} value={this.state.inputValue}/>
          <p>Input length is: {this.state.inputLength}</p>
      </div>
    );
  }
}

export default App;
