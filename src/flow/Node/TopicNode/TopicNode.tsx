import { twMerge } from 'tailwind-merge'
import { Handle, Position, useNodeId, useReactFlow, Node } from '@xyflow/react'
import { useHasChild } from '../../../hooks/useHasChild.ts'
import NodeContainer from '@/flow/NodeContainer.tsx'
import { addSettingNode } from '@/flow/Node/SettingNode/addSettingNode.ts'
export interface ITopicNode extends Node {
  type: 'TopicNode'
  data: Record<string, any>
}

export default function TopicNode() {
  const { getNode } = useReactFlow()
  const id = useNodeId()!
  const node = getNode(id)! as unknown as ITopicNode
  const { hasChild } = useHasChild()
  return (
    <NodeContainer
      onAddNextClick={() => {
        addSettingNode({ id })
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
