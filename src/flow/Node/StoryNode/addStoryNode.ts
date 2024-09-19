import { ITopicNode } from '../TopicNode/TopicNode.tsx'
import { getNode } from '../../../store/getNode.ts'
import { uuid } from '../../../util.ts'
import { Edge } from '@xyflow/react'
import { activeEdgeOption } from '../../Edge/edges.ts'
import { useFlowNodesEdges } from '../../../store/useFlowNodesEdges.ts'
import { IStoryNode } from './StoryNode.tsx'

export function addStoryNode({ id }: { id: string }) {
  const node = getNode(id) as ITopicNode
  const dx = node.width ? node.width / 2 : 0
  const dy = node.height ? node.height / 2 : 0
  const newNode: IStoryNode = {
    selected: false,
    position: {
      x: node.position.x + dx,
      y: node.position.y + dy,
      // y: node.position.y,
    },
    id: uuid(),
    type: 'StoryNode',
    data: {
      title: '故事线',
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
