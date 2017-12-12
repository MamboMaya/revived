import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title">
          <h1>revived</h1>
          <h5>coming soon</h5>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
