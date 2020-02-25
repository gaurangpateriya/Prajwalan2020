import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import Praj from '../../media/logoN.png'
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Home from '@material-ui/icons/Home';
import Events from '@material-ui/icons/Event';
import Workshops from '@material-ui/icons/Work';
import Gallery from '@material-ui/icons/PhotoLibrary';
import Contact from '@material-ui/icons/ContactPhone';
import Sponsors from '@material-ui/icons/Money';
import About from '@material-ui/icons/Info';
import Theme from '@material-ui/icons/LibraryMusic';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import './drawer.css'
const useStyles = makeStyles({
  list: {
    width: 280,
  },
  fullList: {
    width: 'auto',
  },
});

const Element=({item})=>{
  return(
    item==="Home"?
    <Home/>:
      (item==="Events"?
        <Events/>:
          (item==="Workshops"?
            <Workshops/>:
              (item==="Sponsors"?
                <Sponsors/>:
                  (item==="Gallery"?
                    <Gallery/>:
                      (item==="Contact Us"?
                        <Contact/>:
                          (item==="About Us"?
                            <About/>
                            :<Theme/>)))))))
}
export default function SwipeableTemporaryDrawer(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {['Home', 'Events', 'Workshops', 'Sponsors'].map((text, index) => (
          <Link to={`/${text!=="Home"?text:""}`} style={{color:'white',textDecoration:'none'}} onClick={props.toggleDrawer}>
          <ListItem button style={{color:'white'}} key={text}>
            <ListItemIcon style={{color:'white'}}> <Element item={text} /> </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem></Link>
        ))}
      </List>
      <Divider />
      <List>
        {['Gallery', 'Contact Us', 'About Us', 'Theme Songs'].map((text, index) => (
          <Link to={`/${text}`} style={{color:'white',textDecoration:'none'}}>
          <ListItem button  key={text}>
            <ListItemIcon style={{color:'white'}}><Element item={text} /> </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem></Link>
        ))}
      </List>
    </div>
  );

  
  return (
    <SwipeableDrawer
       open={props.open}
        onClose={props.toggleDrawer}
        onOpen={toggleDrawer('left', true)}
      >
        <div
           style={{backgroundImage: "linear-gradient(#141e30,#243b55)",color:'white',height:'100%'}}
           >
        <div className="prajIconContainer"> 
         <IconButton color="primary" aria-label="upload picture" component="span" className="prajIcon">
                <img src={Praj} style={{width:'70px'}}/>
                </IconButton></div>
        {sideList('left')}
        </div>
      </SwipeableDrawer>
     );
}