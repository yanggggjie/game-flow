import { twMerge } from 'tailwind-merge'
import { Handle, Position, useNodeId, useReactFlow, Node } from '@xyflow/react'
import { addMainNode } from './MainNode/addMainNode.ts'
import { addSupportNode } from './SupportNode/addSupportNode.ts'
import { useHasChild } from '../../../hooks/useHasChild.ts'
export interface ICharacterNode extends Node {
  type: 'CharacterNode'
  data: Record<string, any>
}

export default function CharacterNode() {
  const { getNode } = useReactFlow()
  const id = useNodeId()!
  const node = getNode(id)! as unknown as ICharacterNode
  const { hasChild } = useHasChild()

  return (
    <div
      className={twMerge(
        'w-[200px] h-[100px] grid place-items-center bg-[#f6c889] border-[#7492f7] border-2 rounded-xl',
      )}
    >
      <div className={'font-bold text-xl'}>{node.data.title}</div>
      {!hasChild && (
        <button
          className={'bg-green-300 px-2 py-1 hover:bg-green-500 rounded-full'}
          onClick={() => {
            addMainNode({ id })
            addSupportNode({ id })
          }}
        >
          下一个节点
        </button>
      )}

      <Handle type="target" position={Position.Left} />

      <Handle type="source" position={Position.Right} />
    </div>
  )
}
