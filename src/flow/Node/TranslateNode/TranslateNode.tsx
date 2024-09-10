import { twMerge } from 'tailwind-merge'
import { Handle, Position, useNodeId, useReactFlow } from '@xyflow/react'
export interface ITranslateNode extends Node {
  data: Record<string, any>
}

export default function TranslateNode() {
  const { getNode } = useReactFlow()
  const id = useNodeId()!
  const node = getNode(id)! as unknown as ITranslateNode

  return (
    <div
      className={twMerge(
        'w-[200px] h-[100px] grid place-items-center bg-[#e3eafe] border-[#7492f7] border-2 rounded-xl',
      )}
    >
      <div className={'font-bold text-xl'}>{node.data.title}</div>
      <button
        className={'bg-green-300 px-2 py-1 hover:bg-green-500 rounded-full'}
      >
        下一个节点
      </button>
      <Handle type="source" position={Position.Right} />
    </div>
  )
}