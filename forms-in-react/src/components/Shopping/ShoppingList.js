import React, { Component } from 'react'
import ShoppingItem from './ShoppingItem'
import { v4 as uuidv4 } from 'uuid'

export default class ShoppingList extends Component {
  state = {
    items: [
      { name: 'Milk', qty: '2 gallons', id: uuidv4() },
      { name: 'Bread', qty: '2 loaves', id: uuidv4() },
    ],
  }
  addItem = (item) => {
    let newItem = { ...item, id: uuidv4() }
    this.setState((st) => ({ items: [...st.items, newItem] }))
  }
  render() {
    return (
      <div>
        <h1>Shopping List</h1>
        <h3>Name = Quantity</h3>
        <ul>
          {this.state.items.map((item) => {
            return (
              <li key={item.id}>
                {item.name} = {item.qty}
              </li>
            )
          })}
        </ul>
        <ShoppingItem addItem={this.addItem} />
      </div>
    )
  }
}
