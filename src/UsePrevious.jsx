import React, { useEffect, useRef } from 'react'

export default function UsePrevious(value) {
  const ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

/*
+ Lần 1 value = " " => return ref.current là undefined
        effectFunction trong useEffect chạy và update ref.current = ''
+ lần 2 : value = 1
    return current.current tức là " "
    effect function trong useEffect chạy và upadte ref.current = 1
    ....tương tự 


*/
