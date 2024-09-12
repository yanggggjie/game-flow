import React, { ReactNode } from 'react'
import { useNodeId, useReactFlow } from '@xyflow/react'
import { ICustomNode } from '../store/useFlowNodesEdges.ts'
import { setNodeSelected } from '../store/setNodeSelected.ts'
import { twMerge } from 'tailwind-merge'
interface Props {
  children: ReactNode
}

export default function NodeContainer({ children }: Props) {
  const { getNode } = useReactFlow()
  const id = useNodeId()!
  const node = getNode(id)! as unknown as ICustomNode

  return (
    <div
      onClick={() => {
        setNodeSelected(id)
      }}
      className={twMerge(node.selected && 'ring-8 rounded-xl')}
    >
      {children}
    </div>
  )
}
