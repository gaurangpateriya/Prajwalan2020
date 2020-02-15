import React from 'react'
import HomeMain from './component/homeMain'
import Drawer from '../drawer/drawer'
import EventPage from '../EventsPage/EventsPage' 
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
  export default class Home extends React.Component{
  state={
    showDrawer:false
  }
toggleDrawer=()=>{
  this.setState({showDrawer:!this.state.showDrawer})
}
    render() {
    const {showDrawer}=this.state;
        return (
          <div >        
            <Drawer open={showDrawer} toggleDrawer={this.toggleDrawer}/>
            <Route path="/" exact render={()=><HomeMain toggleDrawer={this.toggleDrawer}/>}/> 
            <Route path="/events" exact render={()=><EventPage toggleDrawer={this.toggleDrawer}/>}/> 
            
          </div>
        )
      }
    }