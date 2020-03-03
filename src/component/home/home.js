import React from 'react'
import HomeMain from './component/homeMain'
import Drawer from '../drawer/drawer'
import EventPage from '../EventsPage/EventsPage' 
import SponcersPage from '../SponcersPage/SponcersPage'

import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import Gallery from '../gallery/gallery';
  export default class Home extends React.Component{
  state={
    showDrawer:false,
    hidden:false,
  }
  componentDidMount(){
    if(!this.state.hidden){
      this.setState({hidden:true})
      setTimeout(function(){   document.getElementById('main1').style.visibility="hidden"; }, 3000);
   
        } }
toggleDrawer=()=>{
  this.setState({showDrawer:!this.state.showDrawer})
}
    render() {
    const {showDrawer}=this.state;
        return (
          <div >        
            <Drawer open={showDrawer} toggleDrawer={this.toggleDrawer}/>
            <Route path="/" exact render={()=><HomeMain toggleDrawer={this.toggleDrawer}/>}/> 
            <Route path="/events"  render={()=><EventPage toggleDrawer={this.toggleDrawer}/>}/> 
            {/* <Route path="/gallery"  render={()=><Gallery toggleDrawer={this.toggleDrawer}/>}/>  */}
            <Route path="/Sponsors" exact render={()=><SponcersPage toggleDrawer={this.toggleDrawer} showDrawer={showDrawer}/>}/> 
            
          </div>
        )
      }
  }