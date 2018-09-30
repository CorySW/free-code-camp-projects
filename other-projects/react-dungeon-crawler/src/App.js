import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.health = 100;
    this.weapon = "stick";
    this.weaponID = 0;
    this.damage = 10;
    this.level = 0;
    this.exp = 250;
    this.dungeon = 0;
    this.class = "light";
    this.state = {
      currExp: this.exp,
      currLvl: this.level,
      currWep: this.weapon,
      currHealth: this.health,
      class: this.class
    }
  }

  clear = () => {
    alert("you lose lol !"); 
    this.health = 100; 
    this.weapon = "stick"; 
    this.level = 0; 
    this.exp = 250; 
    this.weaponID = 0;
  }

  handleExp = () => {
    this.exp = this.exp - 50;
    if(this.exp === 0){ this.level++; if(this.level >= 1){ this.exp = 250 * this.level;}}
    this.setState({
      currExp: this.exp,
      currLvl: this.level,
      currWep: this.weapon,
      currHealth: this.health
    })
  }

  handleDmg = () => {
    this.health = this.health - Math.floor(Math.random() * 100);
    if(this.health <= 0) {this.clear()};
    this.setState({
      currExp: this.exp,
      currLvl: this.level,
      currWep: this.weapon,
      currHealth: this.health
    })
  }

  handleHeal = () => {
    this.health = this.health + 10 ;
    this.setState({
      currHealth: this.health
    })
  }

  handleWep = () => {
    let wepArr = new Array(5);
    wepArr[0] = "stick";
    wepArr[1] = "dagger";
    wepArr[2] = "katana";
    wepArr[3] = "large sword";
    wepArr[4] = "War axe";
    wepArr[5] = "Large club";
    if(this.weaponID < 5) this.weaponID++;
    this.weapon = wepArr[this.weaponID];
    this.setState({
      currWep: this.weapon
    })
  }

  handleMoveRgt(e) {
    if (e.keyCode === 39) {
      console.log("YOU MOVED RIGHT");
      this.class = "dark";
      this.setState({
        class: this.class
      })
    }
  }

  handleMoveLft(e) {
    if (e.keyCode === 37) {
      console.log("YOU MOVED LEFT");
      this.class = "dark";
      this.setState({
        class: this.class
      })
    }
  }

  handleMoveDwn(e) {
    if (e.keyCode === 40) {
      console.log("YOU MOVED BACKWARDS");
      this.class = "dark";
      this.setState({
        class: this.class
      })
    }
  }

  handleMoveUp(e) {
    if (e.keyCode === 38) {
      console.log("YOU MOVED UP");
      this.class = "dark";
      this.setState({
        class: this.class
      })
    }
  }

  render() {
    return (
      <div className="App">
      <h1>Current weapon = <code> {this.weapon} </code> health = <code> {this.health} </code> level= <code> {this.level} </code> exp = <code> {this.exp} </code></h1>
      <button onClick={this.handleExp}>Advance </button>
      <button onClick={this.handleDmg}>Damage</button>
      <button onClick={this.handleHeal}>Heal </button>
      <button onClick={this.handleWep}>Upgrade </button>
      <input onKeyUp={this.handleMoveUp}/>
      <input onKeyUp={this.handleMoveDwn}/>
      <input onKeyUp={this.handleMoveLft}/>
      <input onKeyUp={this.handleMoveRgt}/>
      <button className={this.state.class}>↑</button>
      <button className={this.state.class}> ↓</button>
      <button className={this.state.class}>←</button>
      <button className={this.state.class}>→</button>
      </div>
    );
  }
}

export default App;
