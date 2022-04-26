import React, { useContext } from 'react'
import App, { AppContext } from './App'
import { useUser } from './AppContext'

import styled from 'styled-components'

const UL = styled.ul`
  list-style: none;
`
const LI = styled.li`
  font-size: 20px;
  color: red;
  font-style: italic;
`
export default function UseContent() {
  // const value = useContext(AppContext)

  const user = useUser()

  return (
    <div>
      {/* <AppContext.Consumer>
        {value => {
          return (
            <ul>
              <li>Name : {value.name}</li>
              <li>AGE : {value.age}</li>
            </ul>
          )
        }}
      </AppContext.Consumer> */}
      <UL>
        <LI>Name : {user.name}</LI>
        <LI>AGE : {user.age}</LI>
      </UL>
    </div>
  )
}
