import React from 'react';
import logo from '../../logo.svg';
import './Header.css';

export default class Header extends React.Component {
  constructor(){
    super();
    this.state = {name:"_REACT APP"}
  }
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.name}</h1>
        </header>
      </div>
    )
  }
}
