import { create } from 'zustand'
import { Edge, Node } from '@xyflow/react'
import { immer } from 'zustand/middleware/immer'

type RFState = {
  nodes: Node[]
  edges: Edge[]
}

export const useFlowNodesEdges = create<RFState>()(
  immer((set, get) => ({
    nodes: [],
    edges: [],
  })),
)
