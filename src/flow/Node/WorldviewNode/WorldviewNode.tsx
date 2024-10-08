import { twMerge } from 'tailwind-merge'
import { Handle, Position, useNodeId, useReactFlow, Node } from '@xyflow/react'
import { addBackgroundNode } from './BackgroundNode/addBackgroundNode.ts'
import { addCombatNode } from './CombatNode/addCombatNode.ts'
import { useHasChild } from '../../../hooks/useHasChild.ts'
import NodeContainer from '@/flow/NodeContainer.tsx'
export interface IWorldviewNode extends Node {
  type: 'WorldviewNode'
  data: Record<string, any>
}

export default function WorldviewNode() {
  const { getNode } = useReactFlow()
  const id = useNodeId()!
  const node = getNode(id)! as unknown as IWorldviewNode
  const { hasChild } = useHasChild()

  return (
    <NodeContainer
      onAddNextClick={() => {
        addBackgroundNode({ id })
        addCombatNode({ id })
      }}
      showAddNextButton={!hasChild}
    >
      <div
        className={twMerge(
          'w-[200px] h-[100px] grid place-items-center bg-[#b494f4] border-[#7492f7] border-2 rounded-xl text-white',
        )}
      >
        <div className={'font-bold text-xl'}>{node.data.title}</div>
        <Handle type="target" position={Position.Left} />

        <Handle type="source" position={Position.Right} />
      </div>
    </NodeContainer>
  )
}
