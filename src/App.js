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
function App() {
  return (
    <div className="App">
      <Particles 
      style={{
        position:'absolute',
        width:'100%',
        height:'300%'
      }}
                params={Params} />
     <Home/>
    </div>
  );
}

export default App;
