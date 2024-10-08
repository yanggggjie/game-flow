import { twMerge } from 'tailwind-merge'
import { Handle, Position, useNodeId, useReactFlow, Node } from '@xyflow/react'
import { addTranslateNode } from '../../TranslateNode/addTranslateNode.ts'
import { useHasChild } from '../../../../hooks/useHasChild.ts'
import NodeContainer from '@/flow/NodeContainer.tsx'
export interface ICombatNode extends Node {
  type: 'CombatNode'
  data: Record<string, any>
}

export default function CombatNode() {
  const { getNode } = useReactFlow()
  const id = useNodeId()!
  const node = getNode(id)! as unknown as ICombatNode
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
        <div className={'font-bold text-xl'}>{node.data.title}</div>
        <Handle type="target" position={Position.Left} />
        <Handle type="source" position={Position.Right} />
      </div>
    </NodeContainer>
  )
}
