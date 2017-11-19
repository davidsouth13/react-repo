import React from 'react'
import './Page.css'
import ItemList from '../item-list/ItemList'

export default class Page extends React.Component {
  render() {
    return (
      <div className="Page_Main">

        <ItemList/>
      </div>
    )
  }
}
