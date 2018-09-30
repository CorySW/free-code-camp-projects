import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state={input:"* A list\n\n Some **bold** and _italic_ text\n\n> A quote...\n\n ~~Scratch this.~~\n\n1. First ordered list item\n\n2. Another item\n\n```python```"}
  }
  handleChange(ev) {this.setState({input: ev.target.value,output: marked(ev.target.value)});}

   render() {
    return(
      <section>
          <h1>React Markdown</h1>
          <h2>INPUT</h2>
      <textarea id="input" onChange={this.handleChange.bind(this)} value={this.state.input}></textarea>
         <h2 id="title">OUTPUT</h2>
        <section id="output" dangerouslySetInnerHTML={{__html: marked(this.state.input)}}></section>
      </section>
    );
  }
}

ReactDOM.render(<App />,document.getElementById("app"));