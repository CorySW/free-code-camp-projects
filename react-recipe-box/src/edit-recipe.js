import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class EditRecipe extends Component {

    constructor(props){
        super(props);
        this.state = {
            Open:true,
            saveEdit:false
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

    handleChange(ev) {this.setState({input: ev.target.value});}
    render() {
        return(
            <div>
            <Modal show={this.state.Open}>
                <Modal.Header closeButton onClick={this.handleClose.bind(this)}>
                    <Modal.Title>Edit a Recipe</Modal.Title>
                </Modal.Header>
            <Modal.Body>
                <h3>Title</h3>
                    <textarea value={this.props.title}/>
                <h4>Description</h4>
                    <textarea value={this.props.desc}/>
                <h4>Time</h4>
                    <textarea value={this.props.time}/>
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

export default EditRecipe;