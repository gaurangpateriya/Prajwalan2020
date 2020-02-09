import React from 'react';
import logo from './logo.svg';
import './App.css';
import Particles from 'react-particles-js';
import Params from './component/abc.json'
import {
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './component/home/home'
import EventsPage from './component/EventsPage/EventsPage'
function App() {
  return (
    <div className="App">
      <Particles 
      style={{
        position:'absolute',
        width:'100%',
        height:'100%'
      }}
                params={Params} />
     <EventsPage/>
    </div>
  );
}

export default App;
