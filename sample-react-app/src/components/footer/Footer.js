import React from 'react';
import './Footer.css';

export default class Footer extends React.Component {
  constructor(){
    super();
    this.state = {name:"_REACT APP"}
  }
  render() {
    return (
      <div>
        <footer className="App-footer">
          <h1 className="App-title">{this.state.name}</h1>
        </footer>
      </div>
    )
  }
}
