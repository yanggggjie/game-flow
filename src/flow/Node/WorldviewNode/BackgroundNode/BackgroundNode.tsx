import { twMerge } from 'tailwind-merge'
import { Handle, Position, useNodeId, useReactFlow, Node } from '@xyflow/react'
import { addTranslateNode } from '../../TranslateNode/addTranslateNode.ts'
import { useHasChild } from '../../../../hooks/useHasChild.ts'

import TruthSlider from './TruthSlider.tsx'
export interface IBackgroundNode extends Node {
  type: 'BackgroundNode'
  data: Record<string, any>
}

export default function BackgroundNode() {
  const { getNode } = useReactFlow()
  const id = useNodeId()!
  const node = getNode(id)! as unknown as IBackgroundNode
  const { hasChild } = useHasChild()

  return (
    <div
      className={twMerge(
        'w-[200px] h-[200px] grid place-items-center bg-[#b494f4] border-[#7492f7] border-2 rounded-xl text-white',
      )}
    >
      <div className={'font-bold text-xl'}>{node.data.title}</div>
      <TruthSlider></TruthSlider>
      {!hasChild && (
        <button
          onClick={() => {
            addTranslateNode({ id })
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
