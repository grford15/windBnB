import React from 'react';
import axios from 'axios';
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
        <h1>Wind-BNB</h1>
      </div>
    )
  }
}

export default App;
