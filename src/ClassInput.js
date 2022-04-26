import React, { Component } from 'react'

export default class ClassInput extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { value, ...rest } = this.props
    return (
      <div>
        {/* <input type="text" value={this.props.value} onChange={this.props.onChange} /> */}

        {/* <input type="text" {...this.props}/> */}

        <input value={value} {...rest} />
      </div>
    )
  }
}
