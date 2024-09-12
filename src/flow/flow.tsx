import React from 'react'
import { useFlowNodesEdges } from '../store/useFlowNodesEdges.ts'
import { Background, NodeChange, ReactFlow } from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import TopicNode from './Node/TopicNode/TopicNode.tsx'
import useLayout from '../hooks/useLayout.ts'
import { onNodesChange } from '../store/onNodesChange.ts'
import SettingNode from './Node/SettingNode/SettingNode.tsx'
import CharacterImageNode from './Node/CharacterNode/CharacterImageNode/CharacterImageNode.tsx'
import MainNode from './Node/CharacterNode/MainNode/MainNode.tsx'
import SupportNode from './Node/CharacterNode/SupportNode/SupportNode.tsx'
import CharacterNode from './Node/CharacterNode/CharacterNode.tsx'
import ChapterNode from './Node/StoryNode/ChapterNode/ChapterNode.tsx'
import StoryNode from './Node/StoryNode/StoryNode.tsx'
import TranslateNode from './Node/TranslateNode/TranslateNode.tsx'
import BackgroundNode from './Node/WorldviewNode/BackgroundNode/BackgroundNode.tsx'
import WorldviewNode from './Node/WorldviewNode/WorldviewNode.tsx'
import CombatNode from './Node/WorldviewNode/CombatNode/CombatNode.tsx'
import CustomEdge from './Edge/CustomEdge.tsx'
import { onEdgesChange } from '../store/onEdgesChange.ts'
import NodeConfig from './NodeConfig.tsx'
import NodeContainer from './NodeContainer.tsx'

interface Props {}
const nodeTypes = Object.fromEntries(
  Object.entries({
    TopicNode,
    SettingNode,
    CharacterImageNode,
    MainNode,
    SupportNode,
    CharacterNode,
    ChapterNode,
    StoryNode,
    TranslateNode,
    BackgroundNode,
    WorldviewNode,
    CombatNode,
  }).map(([k, V]) => {
    return [
      k,
      () => {
        return (
          <NodeContainer>
            <V></V>
          </NodeContainer>
        )
      },
    ]
  }),
)
const edgeTypes = { CustomEdge }

export default function Flow({}: Props) {
  const { doLayout } = useLayout()
  const { nodes, edges } = useFlowNodesEdges()
  return (
    <div className={'w-screen h-screen'}>
      <ReactFlow
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        nodes={nodes}
        edges={edges}
        onNodesChange={(changes: NodeChange[]) => {
          const dimensionChange = changes.some((item) => {
            return item.type === 'dimensions'
          })
          if (dimensionChange) {
            // note 让布局缩略图在下一个事件循环进行，是为了保证DOM一定被渲染好的，才能获得正确的大小
            setTimeout(async () => {
              await doLayout()
            })
            onNodesChange(changes)
          }
        }}
        onEdgesChange={(changes) => {
          onEdgesChange(changes)
        }}
      >
        <Background></Background>
        <div className={'absolute top-10 left-10 z-10'}>
          <NodeConfig></NodeConfig>
        </div>
      </ReactFlow>
    </div>
  )
}
