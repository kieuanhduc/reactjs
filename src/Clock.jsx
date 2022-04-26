import React, { useRef, useState } from 'react'
import { useEffect } from 'react'

export default function Clock() {
  const [timeString, setTimeString] = useState(null)

  const interValRef = useRef(null)

  useEffect(() => {
    interValRef.current = setInterval(() => {
      const now = new Date()

      const hours = `0${now.getHours()}`.slice(-2)

      const minutes = `0${now.getMinutes()}`.slice(-2)

      const second = `0${now.getSeconds()}`.slice(-2)

      const currentTimeString = `${hours}:${minutes}:${second}`

      setTimeString(currentTimeString)
    }, 1000)

    return () => {
      clearInterval(interValRef.current)
    }
  }, [])

  return <div style={{fontSize:'48px',fontWeight:'bold',color:'orange'}}>{timeString}</div>
}
