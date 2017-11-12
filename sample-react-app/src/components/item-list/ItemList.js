import React from 'react'
import Item from '../item/Item'
import './ItemList.css'
import {Card, Button, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody} from 'reactstrap'

export default class ItemList extends React.Component {
  constructor() {
    super();
    this.state = {items:["Hello","World","Item","Another One"]};
  }

  render() {
    return (
      <div className="itemList">
        <div>
          <CardGroup>
          {this.state.items.map(function(itemElement){
            return (
            <Card>
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
              <CardBody>
                <CardTitle>{itemElement}</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          )
            })}
          </CardGroup>
        </div>

      </div>
    )
  }



}
