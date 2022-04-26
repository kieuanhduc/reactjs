import React, { useState } from 'react'
import UsePrevious from './UsePrevious'

const useInputNumber = initialValue => {
  const [value, setValue] = useState('')

  const handleChange = event => {
    const val = event.target.value

    if (/^\d+$/.test(val) || val === '') {
      setValue(val)
    }
  }

  return [value, handleChange]
}

export default function CustomUseInput() {
  const [value, setValue] = useInputNumber('')

  const [valueTextArea, setValueTextArea] = useInputNumber('')
  const prevValueTextArea = UsePrevious(valueTextArea)

  console.log(prevValueTextArea)
  return (
    <div>
      <input type="text" value={value} onChange={setValue} />

      <textarea type="text" onChange={setValueTextArea} value={valueTextArea} />
    </div>
  )
}
