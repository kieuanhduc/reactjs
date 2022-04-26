import React, { Children } from 'react'
import { useContext } from 'react'

// export const AppContext = React.createContext()

// export const useUser = () => useContext(AppContext)
// const AppContextProvider = ({ children }) => {
//   const user = {
//     name: 'anh duc',
//     age: 22
//   }
//   return <AppContext.Provider value={user}>{children}</AppContext.Provider>
// }

// export default AppContextProvider

export const AppContext = React.createContext()

export const useUser = () => useContext(AppContext)

const AppContextProvider = ({ children }) => {
  const user = {
    name: 'anh duc',
    age: 23
  }

  return <AppContext.Provider value={user}>{children}</AppContext.Provider>
}

export default AppContextProvider
