import { ITopicNode } from '../TopicNode/TopicNode.tsx'
import { getNode } from '../../../store/getNode.ts'
import { uuid } from '../../../util.ts'
import { Edge } from '@xyflow/react'
import { activeEdgeOption } from '../../Edge/edges.ts'
import { useFlowNodesEdges } from '../../../store/useFlowNodesEdges.ts'
import { ISettingNode } from './SettingNode.tsx'

export function addSettingNode({ id }: { id: string }) {
  const node = getNode(id) as ITopicNode
  const dx = node.width ? node.width / 2 : 0
  const dy = node.height ? node.height / 2 : 0
  const newNode: ISettingNode = {
    selected: false,
    position: {
      x: node.position.x + dx,
      y: node.position.y + dy,
      // y: node.position.y,
    },
    id: uuid(),
    type: 'SettingNode',
    data: {
      title: '基本设定',
    },
  }

  const newEdge: Edge = {
    id: uuid(),
    source: id,
    target: newNode.id,
    ...activeEdgeOption,
  }

  useFlowNodesEdges.setState((state) => {
    state.nodes.push(newNode)
    state.edges.push(newEdge)
  })
}
