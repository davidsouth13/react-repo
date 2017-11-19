import React from 'react'
import Item from '../item/Item'
import './ItemList.css'
import './card-item.css'
import {Card, Button, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody} from 'reactstrap'
import StaticData from '../../data/static/static-scraps'

export default class ItemList extends React.Component {
  constructor() {
    super();
    this.state = StaticData
  }

  render() {
    return (
      <div className="itemList">
        <div >

          {this.state.items.map(function(itemElement){
            console.log(itemElement);
            return (
            <Card className="wrapper">
              <CardImg top  src={"./static/images/"+itemElement.ImageID+".jpg"} alt="Card image cap" />
              <CardBody>
                <CardTitle>{itemElement.User}</CardTitle>
                <CardSubtitle>{itemElement.Title}</CardSubtitle>
                <CardText>{itemElement.Body}</CardText>
                <Button>View On Map</Button>
              </CardBody>
            </Card>
            )
            })}

        </div>

      </div>
    )
  }



}
