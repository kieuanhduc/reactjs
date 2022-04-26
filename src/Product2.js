import React, { Component } from 'react'

// const fetchApi = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Success');
//   }, 1000);
// });

const fetchApi = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('success')
    }, 2000)
  })
}

export default class Product2 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      check: true,
      name: 'anh duc',
      product: [
        {
          name: 'Iphone'
        },
        {
          name: 'Samsung'
        },
        {
          name: 'Apple'
        }
      ],
      message: '',
      count: 0
    }

    this.interval = null
  }

  componentDidMount() {
    // const product = document.getElementById('product')
    // console.log(product.textContent)
    //fetch api va setState

    fetchApi().then(res => {
      this.setState({ message: res })
    })

    document.body.addEventListener('click', this.click)

    this.changeCount()
  }

  changeCount = () => {
    this.interval = setInterval(() => {
      this.setState(prevState => ({ count: prevState.count + 1 }))
    }, 1000)
  }

  click = event => {
    document.body.removeEventListener('click', this.componentWillUnmount())
  }

  componentWillUnmount() {
    // khi huy componet , k cho no hoat dong nua

    clearInterval(this.interval)

    this.setState({ count: 0 })
  }

  renderProduct = () => {
    return this.state.product.map((product, index) => <div key={index}>{product.name}</div>)
  }
  render() {
    return (
      <div>
        {this.state.check ? <p>'Đã check' </p> : null}
        {this.state.check && <p>Đã check</p>}
        {!this.state.check && <p>Chua check</p>}

        {this.state.check && (
          <>
            <p>Render nhieu the html</p>
            <p>{this.state.name}</p>
          </>
        )}

        {this.renderProduct()}

        <p id="product">Message is : {this.state.message}</p>

        <p>Count : {this.state.count}</p>
      </div>
    )
  }
}
