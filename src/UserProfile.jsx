import React from 'react'
import { memo } from 'react'

// export default function UserProfile(props) {
//   console.log("UserProfile",props)
//   return <div>UserProfile</div>
// }

// function UserProfile(props){
//   console.log("UserProfile",props)
//   return <div>User Profile</div>
// }

// export default React.memo(UserProfile)

// const UserProfile = memo(
//   props => {
//     console.log('User Profile', props)
//     return <div>User Profile</div>
//   },
//   (prevProps, nextProps) => {
//     return prevProps.profile.name === nextProps.profile.name && prevProps.profile.age === nextProps.profile.age
//   }
// )

// export default UserProfile

const UserProfile = memo(props => {
  console.log('UserProfile', props)

  const { handleClick } = props

  return (
    <div>
      UserProfile
      <button onClick={() => handleClick(200)}>Click</button>
    </div>
  )
})

export default UserProfile
