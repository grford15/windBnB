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
      guests: 0,
      filtered: false
    };
    this.setActive = this.setActive.bind(this);
    this.handleGuestChange = this.handleGuestChange.bind(this);
    this.searchFilter = this.searchFilter.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
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
    const activeState = this.state.active;
    this.setState({
      active: !activeState
    })
  }

  searchFilter() {
    const currentState = this.state.active;
    this.setState({
      active: !currentState,
      filtered: true
    })
  }

  handleGuestChange(e) {
    this.setState({
      guests: parseInt(e.target.value)
    })
  }

  handleLocationChange(e) {
    this.setState({
      location: e.target.value
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
          </div>
        </nav>
        <div className={`filter-drawer ${active ? "active" : null}`}>
          <input type="text" placeholder="Location" onChange={this.handleLocationChange}></input>
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
            properties.filter(property => property.maxGuests >= guests)
            .filter(property => property.city.toLowerCase().includes(location.toLowerCase()))
            .map((property, index) => (
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