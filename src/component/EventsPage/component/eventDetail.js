import React, { Component } from 'react';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Back from '@material-ui/icons/ArrowBack';
import Tabs from './tab'
import Form from './form'
const classes = {
    root: {
      minWidth: 275,
      margin:20,
      
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    
    pos: {
      marginBottom: 12,
    },
    head:{
        display:'flex'
    },
    headButton:{
        position:'absolute',
        right:30
    }
  };
class EventsDetail extends Component {
  state={
      openForm:false
  }
  toggleForm=()=>{
      this.setState({openForm:!this.state.openForm})
  }
  render() {
      const {openForm}=this.state
    return (
        <Card style={classes.root}>
        <CardContent style={classes.head}>
        <IconButton color="secondary" aria-label="upload picture" component="span" onClick={()=>this.props.history.goBack()} >
                <Back  style={{fontSize:'14px'}}/>
              </IconButton>
              <div style={{display:'flex',flexDirection:'column',textAlign:'center',marginLeft:30,marginRight:'auto'}}>
          <Typography  color="textSecondary" variant="h5">
           AndroMaster
          </Typography>
          <Typography variant="h5" component="h2">
           
          </Typography>
          <Typography style={classes.pos} color="textSecondary">
            Android Development Event
          </Typography>
          </div>
          <Button variant="contained" color="secondary" style={classes.headButton} onClick={this.toggleForm}>
        Register
      </Button>
        </CardContent>
        <CardActions>
     <Tabs/>
        </CardActions>
        <Form open={openForm} toggle={this.toggleForm}/>
      </Card>
    );
  }
}


export default EventsDetail;
