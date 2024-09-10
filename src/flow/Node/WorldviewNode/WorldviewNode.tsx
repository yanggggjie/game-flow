import { twMerge } from 'tailwind-merge'
import { Handle, Position, useNodeId, useReactFlow, Node } from '@xyflow/react'
import { addBackgroundNode } from './BackgroundNode/addBackgroundNode.ts'
import { addCombatNode } from './CombatNode/addCombatNode.ts'
import { useHasChild } from '../../../hooks/useHasChild.ts'
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
    <div
      className={twMerge(
        'w-[200px] h-[100px] grid place-items-center bg-[#e3eafe] border-[#7492f7] border-2 rounded-xl',
      )}
    >
      <div className={'font-bold text-xl'}>{node.data.title}</div>
      {!hasChild && (
        <button
          className={'bg-green-300 px-2 py-1 hover:bg-green-500 rounded-full'}
          onClick={() => {
            addBackgroundNode({ id })
            addCombatNode({ id })
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
