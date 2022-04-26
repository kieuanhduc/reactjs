import React, { Component } from 'react'

import PropTypes from 'prop-types'

const fetchApi = () => Promise.resolve(100)

export default class Footer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: 'this is footer',
      number: 0
    }

    // this.click = this.click.bind(this)
  }

  //curring
  click = () => {
    //prevState : luôn đảm bảo state là mới nhất
    this.setState(prevState => ({ number: prevState.number + 1 }))
  }

  componentDidUpdate() {
    console.log(this.state.number)
  }

  render() {
    console.log(this.props)

    return (
      <>
        <button onClick={this.click}>Increase</button>
        <p>Count {this.state.number}</p>
        <footer>{this.state.title}</footer>
        firstName : {this.props.data.firstName}
        <br></br>
        Age : {this.props.data.age}
        <br></br>
      </>
    )
  }
}

Footer.propTypes = {
  data: PropTypes.object
}
