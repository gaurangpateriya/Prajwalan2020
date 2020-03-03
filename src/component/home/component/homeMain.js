import React from 'react'
import * as THREE from "three";
import Cube from '../cube'
import Intro from './intro'
import { theme } from './theme';
import '../home.css'
import Gcoea from '../../../media/gcoeaLogo.png'
import GcoeaSmall from '../../../media/gcoeaLogo1.png'
import Praj from '../../../media/logoN.png'
import  {  ThemeProvider } from 'styled-components/macro';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/icons/Menu';
import Share from './share/share';
import Ball from './Ball'
  export default class HomeMain extends React.Component{

    render() {
        return (
          <div >        
            <div className="cube_c" >
            <Cube/>
            {/* <Ball/> */}
            </div>
            <div style={{width:'100%',display:'flex'}}>
              <div style={{display:'flex',flexDirection:'column', margin:"10px"}}>
              <IconButton color="primary" aria-label="upload picture" component="span" onClick={this.props.toggleDrawer}>
                <img src={Praj} style={{width:'50px'}}/>
                </IconButton>
                <IconButton color="primary" aria-label="upload picture" component="span" onClick={this.props.toggleDrawer}>
                <Menu style={{color:'white'}}/>
              </IconButton>
              </div>
               <ThemeProvider theme={theme.dark}>
                  <Intro show={true}/>
              </ThemeProvider>
              <div style={{maxWidth:'350px',right:0,position:'absolute',padding:'16px'}}>
                <img src={window.innerWidth<'500'?null: Gcoea} width={window.innerWidth<'500'?"30%": "100%"}/>
              </div>

              <Share/>
            </div>
          </div>
        )
      }
  }