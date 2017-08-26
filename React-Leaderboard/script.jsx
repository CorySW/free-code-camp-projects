import React from 'react';
import ReactDOM from 'react-dom';

class LeaderAll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  componentWillMount() {
    fetch("https://fcctop100.herokuapp.com/api/fccusers/top/alltime").then((response) => {
      response.json().then((data) =>{
        var userAll = [];
      for (var i = 0; i < data.length; i++) {
        var link = "https://www.freecodecamp.com/" + data[i].username;
        userAll.push(
       <div>
       <tr>
       <th>Number</th>
       <th>User</th>
       <th>Points in total</th>
       <th>In the last 30 days</th>
       </tr>
            <tr>
            <td>{i+1}</td>
            <td><img src={data[i].img} /><a key={i} href={link} target="_blank"> {data[i].username}</a></td>
            <td>{data[i].alltime} points</td>
            <td>{data[i].recent} points</td>
            </tr>
        </div>
        );
      }
      this.setState({
        user: userAll
      });
      });
    });
  }
  
  render() {
    return(
    <div id="all">
      {this.state.user}
    </div>
    );
  }
}

class Leader30 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  componentWillMount() {
    fetch("https://fcctop100.herokuapp.com/api/fccusers/top/recent").then((response) => {
      response.json().then((data) =>{
      var user30 = [];
      for (var i = 0; i < data.length; i++) {
        var link = "https://www.freecodecamp.com/" + data[i].username;
        user30.push(
          <div>
       <tr>
       <th>Number</th>
       <th>User</th>
       <th>Points In the last 30 days</th>
       <th>In total</th>
       </tr>
            <tr>
            <td>{i+1}</td>
            <td><img src={data[i].img} /> <a key={i} href={link} target="_blank">{data[i].username}</a></td>
            <td>{data[i].recent} points</td>
            <td>{data[i].alltime} points</td>
            </tr>
          </div>
        );
      }
      this.setState({
        user: user30
      });
    });
    });
  }
  
  render() {
    return(
    <div role="tabpanel" className="tab-pane active" id="30">
        <div className="row list-item">
          {this.state.user}
        </div>
      </div>
    );
  }
}


class App extends React.Component { 
  render() {
    return(
         <div>
          <div className="row">
            <h1 className="text-center">Free Code Camp Leaders</h1>
            <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
              <nav className="row">
                <ul className="nav nav-tabs col-sm-offset-1 col-md-8 col-md-offset-2" role="tablist">
                  <li className="active"><a href="#30" data-toggle="tab" role="tab">Last 30 days</a></li>
                  <li><a href="#all" data-toggle="tab" role="tab">All times</a></li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="row">
            <div className="tab-content col-sm-offset-1 col-md-8 col-md-offset-2">
              <Leader30 />
              <LeaderAll />
            </div>
          </div>
        <footer>
          <p className="text-center">Coded with <i className="fa fa-heart"></i> by Cory Whyte</p>
        </footer>
        </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));