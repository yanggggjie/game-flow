import { getNode } from '../../../../store/getNode.ts'
import { ITopicNode } from '../../TopicNode/TopicNode.tsx'
import { IChapterNode } from './ChapterNode.tsx'
import { uuid } from '../../../../util.ts'
import { Edge } from '@xyflow/react'
import { activeEdgeOption } from '../../../Edge/edges.ts'
import { useFlowNodesEdges } from '../../../../store/useFlowNodesEdges.ts'

export function addChapterNode({ id }: { id: string }) {
  const node = getNode(id) as ITopicNode
  const dx = node.width ? node.width / 2 : 0
  const dy = node.height ? node.height / 2 : 0
  const newNode: IChapterNode = {
    selected: false,
    position: {
      x: node.position.x + dx,
      y: node.position.y + dy,
    },
    id: uuid(),
    type: 'ChapterNode',
    data: {
      title: '游戏章节/关卡',
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
