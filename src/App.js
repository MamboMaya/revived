import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './Footer'
import Body from './Body'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Body/>
        <Footer/>
      </div>
    );
  }
}

export default App;
