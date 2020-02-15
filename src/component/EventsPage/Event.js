import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import Particles from 'react-particles-js';
import './EventsPage.css';

class Event extends Component {
  constructor() {
    super();
    this.state = {

    };
    this.eventDetails = {};
  }

  componentWillMount() {
    
    this.eventDetails = this.props.event;
  }

  render() {
    const {
      img, date, name, details,
    } = this.eventDetails;
    return (
      <div className='event-box-parent'>
        <div className="event-box">
          <div className='event-icon'>
            <img src={img.img1} className="event-img" />
          </div>
          <div className='event-content'>
            <h2>{name}</h2>
            <p>{details}</p>

          </div>
          
          
        </div>
      </div>
    );
  }
}


export default Event;
