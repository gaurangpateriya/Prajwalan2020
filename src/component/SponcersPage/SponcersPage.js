import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import Particles from 'react-particles-js';
import './SponcersPage.css';
import styled, {  ThemeProvider } from 'styled-components/macro';
import SponcersSlide from './SlideShow'
import bmcc from '../../media/logoN.png'
import desh  from '../../media/logoN.png'
import time  from '../../media/logoN.png'
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/icons/Menu';
import NormalSponcer from './SponcersCard'
const titleSponcers = [
    {
      name: 'Bharat Makhija Coaching Classes',
      descreption: 'Rathi nagar',
      img: bmcc,
    },
    {
      name: 'Deshonnati news paper',
      descreption: 'Rathi nagar',
      img: desh,
    },
    {
      name: 'Time',
      descreption: 'Czech Republic',
      img: time
    },
    {
      name: 'Amsterdam',
      descreption: 'Netherlands',
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/amsterdam.jpg',
    },
    {
      name: 'Moscow',
      descreption: 'Russia',
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/moscow.jpg',
    },
  ];

  
const noramlSponcers = [
    {
      name: 'Bharat Makhija Coaching Classes',
      descreption: 'Rathi nagar',
      img: bmcc,
    },
    {
      name: 'Deshonnati news paper',
      descreption: 'Rathi nagar',
      img: desh,
    },
    {
      name: 'Time',
      descreption: 'Czech Republic',
      img: time
    },
    {
      name: 'Amsterdam',
      descreption: 'Netherlands',
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/amsterdam.jpg',
    },
    {
      name: 'Moscow',
      descreption: 'Russia',
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/moscow.jpg',
    },
  ];
class SponcersPage extends Component {
    renderNormalSponcers(){
        return noramlSponcers.map((s,i) =>(<NormalSponcer sponser={s} key={i}/>))
    }
    componentWillMount(){
      console.log(this.props)
      this.props.toggleDrawer()
    }
  render() {
    return (
      <div>
        <IconButton color="primary" aria-label="upload picture" component="span" onClick={this.props.toggleDrawer}>
                  <Menu style={{color:'white'}}/>
                </IconButton>
        <div className="sponcers-page-body">

          <h1 className='sponcers-page-heading' >Our Beloved Sponcers</h1>
          <h3 className='sponcers-page-subheading' >Title Sponcers</h3>
          <SponcersSlide sponsors={titleSponcers}/>
          <h3 className='sponcers-page-subheading' >Title Sponcers</h3>
          <div className='sponser-page-container'>
          {
              this.renderNormalSponcers()
          }
          </div>
          
        </div>
      </div>
    );
  }
}


export default SponcersPage;
