import React, { Component } from 'react';
import Header from './components/Header';
import Slider from './components/Slider';
import VenueInfo from './components/VenueInfo';
import './App.css';
import Highlights from './components/Highlights';
import Pricing from './components/Pricing';
import Location from './components/Location';
import Footer from './components/Footer';
import {Element} from 'react-scroll';

class App extends Component {

  componentDidMount() {
    console.log(this._location);
    window._location = this._location;
    // console.log(this._location instanceof Location)
    // console.log(this._location.__proto__ === Location.prototype)
    // console.log(Location.prototype)
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <Element name="slider"> 
          <Slider />
        </Element>
        <Element name="venueInfo">
          <VenueInfo />
        </Element>
        <Element name="highlights">
          <Highlights />
        </Element>
        <Element name="pricing">
          <Pricing />
        </Element>
        <Element name="location">
          <Location  ref={location => this._location = location}/>
        </Element>
        <Footer />
      </div>
    );
  }
}

export default App;
