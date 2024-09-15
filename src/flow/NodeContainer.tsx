import React, { ReactNode, useCallback, useState } from 'react'
import { useNodeId, useOnSelectionChange, useReactFlow } from '@xyflow/react'
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
  const [showWiderRing, setShowWiderRing] = useState(false)

  return (
    <div
      onClick={() => {
        setNodeSelected(id)
        setShowWiderRing(true)
        const timer = setTimeout(() => {
          setShowWiderRing(false)
          clearTimeout(timer)
        }, 300)
      }}
      className={twMerge(
        node.selected && 'ring-4 rounded-xl',
        'cursor-pointer',
        'transition-shadow',
        showWiderRing && 'ring-8',
      )}
    >
      {children}
    </div>
  )
}
