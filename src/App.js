import React from "react";
import axios from "axios";
import logoSVG from "./logo.svg";
import PropertyCard from "./components/PropertyCard";
import { AiOutlineControl, AiOutlineSearch } from 'react-icons/ai';
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [],
      active: false,
      location: '',
      guests: 0
    };
    this.setActive = this.setActive.bind(this);
    this.handleGuestChange = this.handleGuestChange.bind(this);
    this.searchFilter = this.searchFilter.bind(this);
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

  setActive(e) {
    e.preventDefault();
    const currentState = this.state.active;
    this.setState({
      active: !currentState
    })
  }

  searchFilter(e) {
    e.preventDefault();
    console.log(this.state.guests);
    const currentState = this.state.active;
    this.setState({
      active: !currentState
    })
  }

  handleGuestChange(e) {
    this.setState({
      guests: parseInt(e.target.value)
    })
  }

  render() {
    const { properties, active, location, guests } = this.state;

    return (
      <div className="App">
        <nav>
          <img src={logoSVG} alt="wind bnb logo" id="nav-logo" />
          <div className="filter-search">
            <button id="filter" onClick={this.setActive}>
              <AiOutlineControl />
              Filter</button>
            <input type="text" placeholder="Search" id="nav-search"></input>
          </div>
        </nav>
        <div className={`filter-drawer ${active ? "active" : null}`}>
          <input type="text" placeholder="Location"></input>
          <input type="number" placeholder="Guests" value={guests} onChange={this.handleGuestChange} ></input>
          <button id="filter-search" onClick={this.searchFilter}>
            <AiOutlineSearch/>
            Search</button>
          <button id="close-button" onClick={this.setActive}>
            X
          </button>
        </div>
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
            <p></p>
          )}
        </div>
      </div>
    );
  }
}

export default App;
