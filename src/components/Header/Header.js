import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
        <header className="App-header">
          <h1 className="App-title">Famous People:</h1> 
          <p>Do They Know Things? Let's Find Out!</p>
        </header>
    );
  }
}

export default Header;