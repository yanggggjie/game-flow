import { twMerge } from 'tailwind-merge'
import { Handle, Position, useNodeId, useReactFlow, Node } from '@xyflow/react'
import { addChapterNode } from './ChapterNode/addChapterNode.ts'
import { useHasChild } from '../../../hooks/useHasChild.ts'
import NodeContainer from '@/flow/NodeContainer.tsx'
export interface IStoryNode extends Node {
  type: 'StoryNode'
  data: Record<string, any>
}

export default function StoryNode() {
  const { getNode } = useReactFlow()
  const id = useNodeId()!
  const node = getNode(id)! as unknown as IStoryNode
  const { hasChild } = useHasChild()

  return (
    <NodeContainer
      onAddNextClick={() => {
        addChapterNode({ id })
      }}
      showAddNextButton={!hasChild}
    >
      <div
        className={twMerge(
          'w-[200px] h-[100px] grid place-items-center bg-[#bce8b0] border-[#7492f7] border-2 rounded-xl text-black',
        )}
      >
        <div className={'font-bold text-xl'}>{node.data.title}</div>
        <Handle type="target" position={Position.Left} />
        <Handle type="source" position={Position.Right} />
      </div>
    </NodeContainer>
  )
}
