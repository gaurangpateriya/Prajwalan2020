
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import Particles from 'react-particles-js';
import './EventsPage.css';

class LoadingAnimation extends Component {
  render() {
    return (
        <div class='circle'>
          <span data-text='Prajwalan 2020'></span>
          <span data-text='Prajwalan 2020'></span>
          <span data-text='Prajwalan 2020'></span>
          <span data-text='Prajwalan 2020'></span>
          <span data-text='Prajwalan 2020'></span>
          <span data-text=''></span>
        </div>
    );
  }
}


export default LoadingAnimation;

