import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class Addrecipes extends Component {
    constructor(props){
        super(props);
        this.state = {
            Open:true,
            saveAdd:false
        };
    }

    handleClose() {
        this.setState({
            Open: false
        });
    }

    handleSave() {
        this.setState({
            saveAdd:true
        });

    }

    render() {
        return (
            <div>
        <Modal show={this.state.Open}>
        <Modal.Header closeButton onClick={this.handleClose.bind(this)}>
          <Modal.Title>Add a Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>Title</h3>
          <textarea />
          <h4>Description</h4>
          <textarea />
          <h4>Time</h4>
          <textarea />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleSave.bind(this)}>Save Recipe</Button>
          <Button onClick={this.handleClose.bind(this)}>Close</Button>
        </Modal.Footer>
      </Modal>
      </div>
        );
    }
}

export default Addrecipes;