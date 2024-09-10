import { create } from 'zustand'
import { Edge } from '@xyflow/react'
import { immer } from 'zustand/middleware/immer'
import { v4 as uuid } from 'uuid'
import { ITopicNode } from '../flow/Node/TopicNode/TopicNode.tsx'

type ICustomNode = ITopicNode

type RFState = {
  nodes: ICustomNode[]
  edges: Edge[]
}

export const useFlowNodesEdges = create<RFState>()(
  immer((set, get) => ({
    nodes: [
      {
        // @ts-ignore
        id: uuid(),
        type: 'TopicNode',
        position: { x: 1, y: 1 },
        data: {
          title: '选定主题',
        },
      },
    ],
    edges: [],
  })),
)
