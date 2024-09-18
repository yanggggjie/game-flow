import { twMerge } from 'tailwind-merge'
import { Handle, Position, useNodeId, useReactFlow, Node } from '@xyflow/react'
import { addWorldviewNode } from '../WorldviewNode/addWorldviewNode.ts'
import { addCharacterNode } from '../CharacterNode/addCharacterNode.ts'
import { addStoryNode } from '../StoryNode/addStoryNode.ts'
import { useHasChild } from '../../../hooks/useHasChild.ts'
import NodeContainer from '@/flow/NodeContainer.tsx'
export interface ISettingNode extends Node {
  type: 'SettingNode'
  data: Record<string, any>
}

export default function SettingNode() {
  const { getNode } = useReactFlow()
  const id = useNodeId()!
  const node = getNode(id)! as unknown as ISettingNode
  const { hasChild } = useHasChild()

  return (
    <NodeContainer
      onAddNextClick={() => {
        addWorldviewNode({ id })
        addCharacterNode({ id })
        addStoryNode({ id })
      }}
      showAddNextButton={!hasChild}
    >
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
