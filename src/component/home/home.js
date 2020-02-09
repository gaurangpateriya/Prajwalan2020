import React from 'react'
import * as THREE from "three";
import Cube from './cube'
import Intro from './component/intro'
import { theme } from './component/theme';
import './home.css'
import Gcoea from '../../media/gcoeaLogo.png'
import GcoeaSmall from '../../media/gcoeaLogo1.png'
import Praj from '../../media/logoN.png'
import styled, {  ThemeProvider } from 'styled-components/macro';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/icons/Menu';
  export default class Home extends React.Component{
  
    render() {
    
        return (
          <div >         
            <div className="cube_c" >
            <Cube/>
            </div>
            <div style={{width:'100%',display:'flex'}}>
              <div style={{display:'flex',flexDirection:'column', margin:"10px"}}>
                <img src={Praj} width="70px"/>
                <IconButton color="primary" aria-label="upload picture" component="span">
                <Menu style={{color:'white'}}/>
              </IconButton>
              </div>
               <ThemeProvider theme={theme.dark}>
                  <Intro/>
              </ThemeProvider>
              <div style={{maxWidth:'350px',right:0,position:'absolute',padding:'16px'}}>
                <img src={window.innerWidth<'500'?GcoeaSmall: Gcoea} width={window.innerWidth<'500'?"30%": "100%"}/>
              </div> 
            </div>
          </div>
        )
      }
  }