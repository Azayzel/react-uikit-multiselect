import React, { Component } from 'react';
import logo from './logo.svg';
import 'uikit/dist/css/uikit.min.css'
import MultiSelect from "react-uikit-multiselect";
import './App.css';



class App extends Component {
  constructor() {
    super()
    this.state = {
      selectedItems: []
    }
    this.handleOptionChecked = this.handleOptionChecked.bind(this);
  }
  handleOptionChecked = (opt) => {
    this.setState({ selectedItems: opt })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {
            JSON.stringify(this.state.selectedItems)
          }
        </header>
        <div class="uk-form-controls">
          <MultiSelect OptionsList={['Cat', 'Dog', 'Mouse', 'Horse', 'Lizard', 'Dragon']} onOptionChecked={this.handleOptionChecked} />
        </div>
      </div>
    );
  }
}

export default App;
