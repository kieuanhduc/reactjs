import React, { useEffect, useMemo, useRef, useState, forwardRef } from 'react'
import { useCallback } from 'react'
import UserProfile from './UserProfile'

const Input = forwardRef((props, ref) => <input {...props} ref={ref} />)

export default function TestUseCallBack() {
  const [count, setCount] = useState(0)

  // const handleClick = useMemo(() => value => console.log("value",value),[])

  const handleClick = useCallback(value => console.log('VALUE', value), [])

  const pRef = useRef(null)

  const count2 = useRef(0)

  const inputRef = useRef()

  const changeColor = () => {
    pRef.current.style.color = 'red'
  }

  const changeCount = () => {
    count2.current = count2.current + 1
    if (count2.current === 3) {
      alert('Count === 3')
    }
  }

  const changeBorder = () => {
    inputRef.current.style.borderColor = 'red'
  }

  useEffect(() => {
    console.log(inputRef)
  }, [])

  return (
    <div>
      <div ref={pRef}>TEST CALLBACK</div>
      <button onClick={changeColor}>Change color</button>
      <button onClick={changeCount}>Change count</button>
      <button onClick={changeBorder}>Change border</button>
      <button onClick={() => setCount(count => count + 1)}>Change Count {count}</button>

      <UserProfile handleClick={handleClick} />

      <br></br>
      <div>
        {/* <Input ref={inputRef} /> */}

        <Input ref={inputRef} />
      </div>
    </div>
  )
}
