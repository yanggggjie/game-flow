import { twMerge } from 'tailwind-merge'
import { Handle, Position, useNodeId, useReactFlow, Node } from '@xyflow/react'
import { addTranslateNode } from '../../TranslateNode/addTranslateNode.ts'
import { useHasChild } from '../../../../hooks/useHasChild.ts'
import NodeContainer from '@/flow/NodeContainer.tsx'
import React from 'react'
import BackgroundTruthRatio from '@/flow/Node/WorldviewNode/BackgroundNode/BackgroundTruthRatio.tsx'

export interface IBackgroundNode extends Node {
  type: 'BackgroundNode'
  data: Record<string, any>
}

export default function BackgroundNode() {
  const { getNode } = useReactFlow()
  const id = useNodeId()!
  const node = getNode(id)! as unknown as IBackgroundNode
  const { hasChild } = useHasChild()

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
          <BackgroundTruthRatio></BackgroundTruthRatio>
        </div>
        <Handle type="target" position={Position.Left} />
        <Handle type="source" position={Position.Right} />
      </div>
    </NodeContainer>
  )
}
