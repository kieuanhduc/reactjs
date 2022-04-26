import React, { Component } from 'react'
import ClassInput from './ClassInput'
import Layout from './Layout'

export default class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      check: false,
      name: 'Anh Duc',
      value: ''
    }
  }

  handleChange = event => {
    this.setState({ value: event.target.value })
  }
  render() {
    return (
      <>
        <div>{this.state.check ? 'Đã check' : 'Chưa check'}</div>

        <ClassInput value={this.state.value} onChange={this.handleChange} />

        <Layout>
          <p>{this.state.value}</p>
        </Layout>
      </>
    )
  }
}
