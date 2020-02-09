import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import Particles from 'react-particles-js';
import './EventsPage.css';

class EventPhoto extends Component {
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
        <li className="event-photo-li">
            <img src={img}/>

          <div className='event-photo-li-content'>
            <h2>{name}</h2>
            <p>{details}</p>

          </div>      
        </li>
    );
  }
}


export default EventPhoto;
