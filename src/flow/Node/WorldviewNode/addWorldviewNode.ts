import { ITopicNode } from '../TopicNode/TopicNode.tsx'
import { getNode } from '../../../store/getNode.ts'
import { uuid } from '../../../util.ts'
import { Edge } from '@xyflow/react'
import { activeEdgeOption } from '../../Edge/edges.ts'
import { useFlowNodesEdges } from '../../../store/useFlowNodesEdges.ts'
import { IWorldviewNode } from './WorldviewNode.tsx'

export function addWorldviewNode({ id }: { id: string }) {
  const node = getNode(id) as ITopicNode
  const dx = node.width ? node.width / 2 : 0
  const dy = node.height ? node.height / 2 : 0
  const newNode: IWorldviewNode = {
    selected: false,
    position: {
      x: node.position.x + dx,
      y: node.position.y + dy,
    },
    id: uuid(),
    type: 'WorldviewNode',
    data: {
      title: '世界观',
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
