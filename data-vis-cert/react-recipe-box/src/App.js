import React, { Component } from 'react';
import './App.css';
import { Accordion, Panel, Button, ButtonToolbar, Modal, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

class App extends Component {

  state = {
    initrecipes: [
      {title:'test1',desc:"test2", ingredients: ['test3'], time:`123`},
      {title:'test1',desc:"test2", ingredients: ['test3'], time:`123`},
      {title:'test1',desc:"test2", ingredients: ['test3'], time:`123`}
    ]
  }

  render() {
    return (
      <div className="App container">
      <Accordion>
        {this.state.initrecipes.map((recipe, i)=>(
          <Panel header={recipe.title} eventKey={i} key={i}>
            <ul>
                <li key={recipe.desc}>{recipe.desc}</li>
              </ul>
              <ul>
              {recipe.ingredients.map((ing)=>(
                <li key={ing}>{ing}</li>
              ))}
              </ul>
              <ul>
                <li key={recipe.time}>{recipe.time}</li>
              </ul>
              <ButtonToolbar>
                <Button bsStyle="default">Edit this recipe !</Button>
                <Button bsStyle="danger">Delete this recipe..</Button>
              </ButtonToolbar>
            </Panel>
        ))}
      </Accordion>
      </div>
    );
  }
}

export default App;
