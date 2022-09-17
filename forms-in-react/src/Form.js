import React, { Component } from 'react'

export default class Form extends Component {
  state = {
    username: '',
    email: '',
    password: '',
  }
  handleChange = (evt) => {
    evt.preventDefault()
    this.setState({ [evt.target.name]: evt.target.value })
  }
  handleSubmit = (evt) => {
    evt.preventDefault()
    this.setState({ username: '', email: '', password: '' })
  }
  render() {
    return (
      <div>
        <h1>Form Demo</h1>
        <form>
          <div>
            <input type='text' name='username' onChange={this.handleChange} />
          </div>
          <br />
          <div>
            <input type='email' name='email' onChange={this.handleChange} />
          </div>
          <br />
          <div>
            <input
              type='password'
              name='password'
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div>
            <button type='submit' onSubmit={this.handleSubmit}>
              <h4>Submit</h4>
            </button>
          </div>
        </form>
        <h3>{this.state.username}</h3>
        <h3>{this.state.email}</h3>
      </div>
    )
  }
}
