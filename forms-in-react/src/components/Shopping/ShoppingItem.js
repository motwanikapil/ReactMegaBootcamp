import React, { Component } from 'react'

export default class ShoppingItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      qty: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }
  handleSubmit(evt) {
    evt.preventDefault()
    this.props.addItem(this.state)
  }
  render() {
    return (
      <div>
        <br />
        <form onSubmit={this.handleSubmit}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}
          >
            <div>
              <label htmlFor='name'>Name </label>
              <input
                type='text'
                id='name'
                name='name'
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>

            <div>
              <label htmlFor='qty'>Quantity </label>

              <input
                type='text'
                id='qty'
                name='qty'
                value={this.state.qty}
                onChange={this.handleChange}
              />
            </div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    )
  }
}
