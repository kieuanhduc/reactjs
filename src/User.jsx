import React, { useEffect, useMemo } from 'react'
import { Component } from 'react'
import { useState } from 'react'
import UserProfile from './UserProfile'

const initalUsers = () => {
  console.log('initalUsers')
  const result = []

  for (let i = 0; i < 10; i++) {
    result.push(`User ${i}`)
  }

  return result
}

//curryng

const connect = Component => props => {
  // const profile = {
  //   name: 'Anh Duc',
  //   age: 22
  // }

  //chỉ chạy khi component render lần đầu tiên

  const profile = useMemo(
    () => ({
      name: 'Anh Duc',
      age: 22
    }),
    []
  )

  return <Component {...props} profile={profile} />
}

const UserProfileWrapper = connect(UserProfile)

export default function User() {
  const handleClick = useMemo(() => value => console.log('Value', value), [])

  const [profile, setProfile] = useState({
    name: 'Duc',
    age: 20
  })

  const [list] = useState(() => initalUsers())
  const [count, setCount] = useState(0)
  const [age, setAge] = useState(22)

  const handleChange = () => {
    setProfile(prevProfile => ({ ...prevProfile, age: prevProfile.age + 1 }))
  }

  const handleChangeCountUser = () => {
    setCount(count => count + 1)
  }

  //componetDidUpdate
  useEffect(() => {
    console.log('useEffect')
  })

  //componentDidMount
  useEffect(() => {
    console.log('useEffect []')
  }, [])

  //
  useEffect(() => {
    console.log(`Count : ${count}`)

    return () => {
      //componet willunmount
      console.log('clean')
    }
  }, [count])

  return (
    <div>
      <button onClick={() => setAge(age => age + 1)}>Increase Age {age}</button>
      <button onClick={() => setCount(count => count + 1)}>Increase Count {count}</button>
      <button onClick={handleChange}>Change</button>
      <p>Name: {profile.name}</p>
      <p>Age : {profile.age}</p>

      <h2>List user</h2>
      <button onClick={handleChangeCountUser}>Change User</button>
      {list.map((item, index) => (
        <p key={index}>{item}</p>
      ))}

      <UserProfileWrapper handleClick={handleClick} />
    </div>
  )
}
