import React, { Component } from 'react';
import './App.css';

import logo from './img/logo.png';

import NavBar from './components/NavBar/NavBar';

let a = [ 
  {
    url: "#",
    text: "HOME"
  },
  {
    url: "#",
    text: "LATEST MANGA"
  },
  {
    url: "#",
    text: "COMPLETED MANGA"
  },
  {
    url: "#",
    text: "MORE"
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar imgLogo={logo} items={a} />
      </div>
    );
  }
}

export default App;
