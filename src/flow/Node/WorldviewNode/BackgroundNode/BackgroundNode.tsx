import { twMerge } from 'tailwind-merge'
import { Handle, Position, useNodeId, useReactFlow, Node } from '@xyflow/react'
import { addTranslateNode } from '../../TranslateNode/addTranslateNode.ts'
import { useHasChild } from '../../../../hooks/useHasChild.ts'
import NodeContainer from '@/flow/NodeContainer.tsx'
import { Slider } from '@/components/ui/slider.tsx'
import React, { useState } from 'react'

export interface IBackgroundNode extends Node {
  type: 'BackgroundNode'
  data: Record<string, any>
}

export default function BackgroundNode() {
  const { getNode } = useReactFlow()
  const id = useNodeId()!
  const node = getNode(id)! as unknown as IBackgroundNode
  const { hasChild } = useHasChild()
  const [value, setValue] = useState([0.5])

  return (
    <NodeContainer
      onAddNextClick={() => {
        addTranslateNode({ id })
      }}
      showAddNextButton={!hasChild}
    >
      <div
        className={twMerge(
          'w-[200px] h-[100px] grid place-items-center bg-[#b494f4] border-[#7492f7] border-2 rounded-xl text-white',
        )}
      >
        <div
          className={
            'w-full h-full px-2 py-1 flex flex-col items-center justify-center gap-2'
          }
        >
          <div className={'font-bold text-xl'}>{node.data.title}</div>
          <div className={'flex flex-row'}>
            原著相关度:
            <div className={'w-[20px]'}>{value[0].toFixed(2)}</div>
          </div>
          <Slider
            className={''}
            value={value}
            onValueChange={(value) => {
              setValue(value)
            }}
            max={1}
            step={0.01}
          />
        </div>
        <Handle type="target" position={Position.Left} />
        <Handle type="source" position={Position.Right} />
      </div>
    </NodeContainer>
  )
}
