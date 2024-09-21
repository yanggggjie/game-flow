import React, { useState } from 'react'
import { Slider } from '@/components/ui/slider.tsx'

interface Props {}

export default function BackgroundTruthRatio({}: Props) {
  const [ratio, setRatio] = useState([0.5])

  return (
    <>
      <div className={'flex flex-row'}>
        原著相关度:
        <div className={'w-[20px]'}>{ratio[0].toFixed(2)}</div>
      </div>
      <Slider
        className={''}
        value={ratio}
        onValueChange={(value) => {
          setRatio(value)
        }}
        max={1}
        step={0.01}
      />
    </>
  )
}
