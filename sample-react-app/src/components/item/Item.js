import React from 'react'
import './item.css'

export default class Item extends React.Component {
  render() {
    return (
      <div className="itemElement">
        <p>{this.props.title}</p>
      </div>
    )
  }
}
