import { twMerge } from 'tailwind-merge'
import { Handle, Position, useNodeId, useReactFlow, Node } from '@xyflow/react'
import NodeContainer from '@/flow/NodeContainer.tsx'
export interface ICharacterImageNode extends Node {
  type: 'CharacterImageNode'
  data: Record<string, any>
}

export default function CharacterImageNode() {
  const { getNode } = useReactFlow()
  const id = useNodeId()!
  const node = getNode(id)! as unknown as ICharacterImageNode
  return (
    <NodeContainer onAddNextClick={() => {}} showAddNextButton={false}>
      <div
        className={twMerge(
          'w-[200px] h-[100px] grid place-items-center bg-[#e3eafe] border-[#7492f7] border-2 rounded-xl',
        )}
      >
        <div className={'font-bold text-xl'}>{node.data.title}</div>

        <Handle type="target" position={Position.Left} />
        <Handle type="source" position={Position.Right} />
      </div>
    </NodeContainer>
  )
}
