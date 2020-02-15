import React, { Component } from 'react';
// import Particles from 'react-particles-js';
import './EventsPage.css';
import img1 from '../../media/gameconsole.png';
import Event from './Event';
import Header from '../home/component/header'
import EventDetail from './component/eventDetail'
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
const events = [
  {
    img: { img1 }, date: '07-march-2020', name: 'Andro Master', details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing",
  },
  {
    img: { img1 }, date: '07-march-2020', name: 'Andro Master', details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing",
  },
  {
    img: { img1 }, date: '07-march-2020', name: 'Andro Master', details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing",
  },
  {
    img: { img1 }, date: '07-march-2020', name: 'Andro Master', details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing",
  },
  {
    img: { img1 }, date: '07-march-2020', name: 'Andro Master', details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing",
  },
  {
    img: { img1 }, date: '07-march-2020', name: 'Andro Master', details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing",
  },
  {
    img: { img1 }, date: '07-march-2020', name: 'Andro Master', details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing",
  },
  {
    img: { img1 }, date: '07-march-2020', name: 'Andro Master', details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing",
  },
  {
    img: { img1 }, date: '07-march-2020', name: 'Andro Master', details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing",
  },
  {
    img: { img1 }, date: '07-march-2020', name: 'Andro Master', details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing",
  },
  {
    img: { img1 }, date: '07-march-2020', name: 'Andro Master', details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing",
  },
  {
    img: { img1 }, date: '07-march-2020', name: 'Andro Master', details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing",
  },
  {
    img: { img1 }, date: '07-march-2020', name: 'Andro Master', details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing",
  },
  
];

const eventPhots =[{
  img : "http://cnet2.cbsistatic.com/hub/i/r/2015/05/27/7b2ba959-3a0b-46fe-bfe7-76ef6154b760/resize/570xauto/f806fb22601e9ae802cd94aeb60427e0/vivid-robowars-lge.jpg",
  name:'robowars',details:""
},
{
  img : "http://cnet2.cbsistatic.com/hub/i/r/2015/05/27/7b2ba959-3a0b-46fe-bfe7-76ef6154b760/resize/570xauto/f806fb22601e9ae802cd94aeb60427e0/vivid-robowars-lge.jpg",
  name:'robowars',details:""
},
{
  img : "http://cnet2.cbsistatic.com/hub/i/r/2015/05/27/7b2ba959-3a0b-46fe-bfe7-76ef6154b760/resize/570xauto/f806fb22601e9ae802cd94aeb60427e0/vivid-robowars-lge.jpg",
  name:'robowars',
  details:""
},
{
  img : "http://cnet2.cbsistatic.com/hub/i/r/2015/05/27/7b2ba959-3a0b-46fe-bfe7-76ef6154b760/resize/570xauto/f806fb22601e9ae802cd94aeb60427e0/vivid-robowars-lge.jpg",
  name:'robowars',details:""
},
{
  img : "http://cnet2.cbsistatic.com/hub/i/r/2015/05/27/7b2ba959-3a0b-46fe-bfe7-76ef6154b760/resize/570xauto/f806fb22601e9ae802cd94aeb60427e0/vivid-robowars-lge.jpg",
  name:'robowars',details:""
},
{
  img : "http://cnet2.cbsistatic.com/hub/i/r/2015/05/27/7b2ba959-3a0b-46fe-bfe7-76ef6154b760/resize/570xauto/f806fb22601e9ae802cd94aeb60427e0/vivid-robowars-lge.jpg",
  name:'robowars',details:""
},
{
  img : "http://cnet2.cbsistatic.com/hub/i/r/2015/05/27/7b2ba959-3a0b-46fe-bfe7-76ef6154b760/resize/570xauto/f806fb22601e9ae802cd94aeb60427e0/vivid-robowars-lge.jpg",
  name:'robowars',details:""
},
{
  img : "http://cnet2.cbsistatic.com/hub/i/r/2015/05/27/7b2ba959-3a0b-46fe-bfe7-76ef6154b760/resize/570xauto/f806fb22601e9ae802cd94aeb60427e0/vivid-robowars-lge.jpg",
  name:'robowars',details:""
},
{
  img : "http://cnet2.cbsistatic.com/hub/i/r/2015/05/27/7b2ba959-3a0b-46fe-bfe7-76ef6154b760/resize/570xauto/f806fb22601e9ae802cd94aeb60427e0/vivid-robowars-lge.jpg",
  name:'robowars',details:""
},
{
  img : "http://cnet2.cbsistatic.com/hub/i/r/2015/05/27/7b2ba959-3a0b-46fe-bfe7-76ef6154b760/resize/570xauto/f806fb22601e9ae802cd94aeb60427e0/vivid-robowars-lge.jpg",
  name:'robowars',details:""
},
]


class EventsPage extends Component {
  rnderEvents=() => (
    events.map((e, i) => (
   <Link to="/events/eventDetail">  <Event event={e} key={i} /></Link> 
    )))
   /* renderEventsPhots=() => (
      eventPhots.map((e, i) => (
        <EventPhotos event={e} key={i} />
      )))
*/
  render() {
    return (
      <div className="event-page-body">
        {/* <LoadingAnimation/> */}
       <Header toggleDrawer={this.props.toggleDrawer}/>
       <Route path="/events/eventDetail" exact 
       render={(props)=><EventDetail {...props}/> }/> 
          
       <Route path="/events" exact 
       render={()=> <div class='event-container'>
          {this.rnderEvents()}
        </div>}/> 
          
       
      </div>
    );
  }
}


export default EventsPage;
