import React from 'react';
import logo from '../../logo.svg';
import './Header.css';
import {Jumbotron, Button} from 'reactstrap'

export default class Header extends React.Component {
  constructor(){
    super();
    this.state = {name:"_REACT APP"}
  }
  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">My Simple React App Header</h1>
            <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-2" />
            <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
            <p className="lead">
              <Button color="primary">Learn More</Button>
            </p>
          </Jumbotron>
      </div>
    )
  }
}
