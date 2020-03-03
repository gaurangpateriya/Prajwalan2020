import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import Particles from 'react-particles-js';
import './SponcersPage.css';
import styled, {  ThemeProvider } from 'styled-components/macro';
import SponcersSlide from './SlideShow'
import desh  from '../../media/sponcers/deshonnati-newspaper-dhantoli-nagpur-newspaper-3zs32fu.jpg'
import time  from '../../media/sponcers/time.png'

class SponcersCard extends Component {
 
  render() {
      const { name , img,descreption} = this.props.sponser
    return (
        <div className='sponsor-card-box'>
            <div className='sponsor-card-img-div'>
                <img src={img} className='sponsor-card-img'/>
            </div>
            <div className='sponsor-card-details'>
                <h2>{name}</h2>
                <p>{descreption}</p>
            </div>
        </div>
    );
  }
}


export default SponcersCard;
