import React from 'react'
import Item from '../item/Item'

export default class ItemList extends React.Component {
  constructor() {
    super();
    this.state = {items:["Hello","World","Item"]};
  }

  render() {
    return (
      <div>
        {this.state.items.map(function(itemElement){
          return <Item title={itemElement} />
        })}
      </div>
    )
  }



}
