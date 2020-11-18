import React from 'react';
import axios from 'axios';
import logoSVG from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      properties: []
    }
  }

  componentDidMount() {
    axios.get('./stays.json')
    .then((res) => {
      console.log(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }

  render() {
    return(
      <div className="App">
        <nav>
          <img src={logoSVG} alt="wind bnb logo" id="nav-logo" />
          <input type="text" placeholder="Search" id="nav-search"></input>
        </nav>
      </div>
    )
  }
}

export default App;
