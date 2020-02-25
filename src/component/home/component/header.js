import React from 'react'
import Intro from './intro'
import { theme } from './theme';
import Gcoea from '../../../media/gcoeaLogo.png'
import GcoeaSmall from '../../../media/gcoeaLogo1.png'
import Praj from '../../../media/logoN.png'
import  {  ThemeProvider } from 'styled-components/macro';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/icons/Menu';
  export default class Header extends React.Component{

    render() {
        return (
          <div >        
            <div style={{width:'100%',display:'flex'}} >
              <div style={{display:'flex',flexDirection:'column', margin:"10px"}}>
              {window.innerWidth<'500'? <img src={Praj} style={{width:'50px'}}/>: 
              <IconButton color="primary" aria-label="upload picture" component="span" onClick={this.props.toggleDrawer}>
                <img src={Praj} style={{width:'50px'}}/>
                </IconButton>} 
              
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
            </div>
          </div>
        )
      }
  }