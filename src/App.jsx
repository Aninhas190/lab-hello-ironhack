import React, { Component } from 'react';
//import logo from './logo.svg';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar">
            <img src="images/ironhack-logo.svg" alt="ironhack logo" />
            <img src="images/menu-top.svg" alt="menu logo" />
         </nav>
        <header className="App-header">
          
          <h1>Say hello to ReactJS</h1>
          <p>You will learn a Frontend framework from scratch, to become an Ninja Developer.</p>
          <br />
          <a
            className="App-link"
            rel="noopener noreferrer"
          >
            Awesome!
          </a>
        </header>
        <section className="section-2">
          <div className="box">
            <img src="images/icon1.png" alt="declarative icon" />
            <h4>Declarative</h4>
            <p>React makes it painless to create interactive UIs</p>
          </div>
          <div className="box">
            <img src="images/icon2.png" alt="components icon" />
            <h4>Components</h4>
            <p>Build encapsulated components that manage their state</p>
          </div>
          <div className="box">
            <img src="images/icon3.png" alt="single-way icon" />
            <h4>Single-Way</h4>
            <p>A set of immutable values are passed to the component's</p>
          </div>
          <div className="box">
            <img src="images/icon4.png" alt="jsx icon" />
            <h4>JSX</h4>
            <p>Statically-typed, designed to run on modern browsers.</p>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
