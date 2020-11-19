import React from "react";
import axios from "axios";
import logoSVG from "./logo.svg";
import PropertyCard from "./components/PropertyCard";
import { AiOutlineControl } from 'react-icons/ai';
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [],
    };
  }

  componentDidMount() {
    axios
      .get("./stays.json")
      .then((res) => {
        this.setState({
          properties: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { properties } = this.state;
    console.log(properties);

    return (
      <div className="App">
        <nav>
          <img src={logoSVG} alt="wind bnb logo" id="nav-logo" />
          <div className="filter-search">
            <button id="filter">
              <AiOutlineControl />
              Filter</button>
            <input type="text" placeholder="Search" id="nav-search"></input>
          </div>
        </nav>
        <div className="property-container">
          {properties.length ? (
            properties.map((property, index) => (
              <PropertyCard
                title={property.title}
                index={index}
                key={index}
                photo={property.photo}
                type={property.type}
                rating={property.rating}
                superHost={property.superHost}
              />
            ))
          ) : (
            <p>Didn't work</p>
          )}
        </div>
      </div>
    );
  }
}

export default App;
