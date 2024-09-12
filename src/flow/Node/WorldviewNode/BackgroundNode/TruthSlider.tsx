import React, { useState } from 'react'
import { Slider } from '../../../../components/ui/slider.tsx'
interface Props {}

export default function TruthSlider({}: Props) {
  const [value, setValue] = useState([0.5])
  return (
    <div className={'w-[200px]'}>
      <div>原著相关度:{value[0]}</div>
      <Slider
        value={value}
        onValueChange={(value) => {
          setValue(value)
        }}
        max={1}
        step={0.01}
      />
    </div>
  )
}
