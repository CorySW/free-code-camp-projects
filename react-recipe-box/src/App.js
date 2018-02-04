import React, { Component } from 'react';
import Initrecipes from './initial-recipes';
import Addrecipes from './add-recipes';
import './App.css';
import { Button } from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      openAdd: false
    };
    }

    OpenAdd() {
      this.setState({
        openAdd: !this.state.openAdd
      });
    }

  render() {
    return (
      <div className="App">
      <Initrecipes/>
      <Button onClick={this.OpenAdd.bind(this)}>Add a recipe</Button>
      {this.state.openAdd ? <Addrecipes/> : undefined}
      </div>
    );
  }
}

export default App;
