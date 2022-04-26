import logo from './logo.svg'
import './App.css'
import Product from './Product'
import Header from './Header'
import Footer from './Footer'
import ClassInput from './ClassInput'
import Product2 from './Product2'
import User from './User'
import TestUseCallBack from './TestUseCallBack'
import CustomUseInput from './CustomUseInput'
import React from 'react'
import UseContent from './UseContent'
import AppContextProvider from './AppContext'
import Clock from './Clock'

function App() {
  const data = {
    firstName: 'anh duc',
    age: 22
  }

  return (
    <div className="App">
      {/* <Header />
      <Product></Product>
      <Footer data={data} />
      <p>===================================</p>
      <Product2 /> */}

      <User />
      <AppContextProvider>
        <UseContent></UseContent>
      </AppContextProvider>

      <TestUseCallBack />

      <CustomUseInput />

      <Clock />
    </div>
  )
}

export default App
