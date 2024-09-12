import React from 'react'
import { useFlowNodesEdges } from '../store/useFlowNodesEdges.ts'
interface Props {}

export default function NodeConfig({}: Props) {
  const { nodes, edges } = useFlowNodesEdges()
  const activeNode = nodes.filter((node) => {
    return node.selected
  })[0]
  return (
    <div className={'w-[300px] h-[600px] bg-red-300'}>
      {JSON.stringify(activeNode.data)}
      <div>
        <div>配置</div>
        <div>配置</div>
        <div>配置</div>
        <div>配置</div>
        <div>配置</div>
        <div>配置</div>
        <div>配置</div>
        <div>配置</div>
        <div>配置</div>
        <div>配置</div>
        <div>配置</div>
        <div>配置</div>
        <div>配置</div>
        <div>配置</div>
        <div>配置</div>
        <div>配置</div>
      </div>

      <div className={'flex flex-row items-center justify-center'}>
        <input type="text" />
        <button>调整</button>
      </div>
    </div>
  )
}
