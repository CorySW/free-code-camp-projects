import React, { Component } from 'react';
import {Button, Jumbotron } from 'react-bootstrap';
import Editrecipe from './edit-recipe'

class Initrecipes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initrecipes: [{
                title: 'Tequila-Lime Pork Tenderloin',
                desc: 'test',
                time: 20 + ' mins'
              }, {
                title: 'Baked Buffalo Chicken Dip',
                desc: 'test',
                time: 20 + ' mins'
              }, {
                title: 'Chicken Parmesan',
                desc: 'test',
                time: 20 + ' mins'
              }],
              change: false
        };
      }

                componentWillMount() {
                    var PrevData = JSON.parse(localStorage.getItem('CorySW_RECIPES'));
                    if (PrevData) {
                    this.setState({
                        initrecipes: PrevData
                                });
                                }
                            }
  
                componentDidUpdate() {
                    localStorage.setItem('CorySW_RECIPES', JSON.stringify(this.state.initrecipes));
                    }

                handleChange() {
                    this.setState({
                    change:!this.state.change
                    });
                }


    render() {
        const initrecipes = this.state.initrecipes.map((recipe, i) => {
            return (
            <ul key={i}>
                <li>{recipe.title}</li>
                <li>{recipe.desc}</li>
                <li>{recipe.time}</li>
           </ul>
            );
        });

        return (
            <div>
                <Jumbotron>
                <div>{initrecipes}</div>
                <Button bsStyle="success" onClick={this.handleChange.bind(this)}>Edit</Button>
                <div>{this.state.change ? <Editrecipe title={this.state.initrecipes.title} description={this.state.initrecipes.desc} time={this.state.initrecipes.time}/> : undefined}</div>
                </Jumbotron>
            </div>
        );
    }
}

export default Initrecipes;