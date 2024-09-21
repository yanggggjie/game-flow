import React, { useState, useEffect } from 'react'
import { Slider } from '@/components/ui/slider.tsx'

interface Props {}

export default function BackgroundTruthRatio_({}: Props) {
  const [ratio, setRatio] = useState([0.5])

  // 用于防抖的状态
  const [debouncedRatio, setDebouncedRatio] = useState(ratio)

  // 监听 ratio 的变化并在延迟后发送请求
  useEffect(() => {
    const handler = setTimeout(() => {
      // 当 ratio 的变化稳定下来后，将值设置为 debouncedRatio
      setDebouncedRatio(ratio)
    }, 300) // 300ms 的防抖时间

    // 清除上一次的 timeout
    return () => {
      clearTimeout(handler)
    }
  }, [ratio])

  // 当 debouncedRatio 变化时，执行发送请求的逻辑
  useEffect(() => {
    // 假设发送请求的函数
    const sendRatioToServer = async () => {
      try {
        const response = await fetch('/api/update-ratio', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ratio: debouncedRatio[0] }),
        })
        if (!response.ok) {
          throw new Error('Failed to send ratio')
        }
        console.log('Ratio successfully sent:', debouncedRatio[0])
      } catch (error) {
        console.error('Error sending ratio:', error)
      }
    }

    // 发送请求
    sendRatioToServer()
  }, [debouncedRatio])

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
