import { useFlowNodesEdges } from './useFlowNodesEdges.ts'
import { applyNodeChanges, NodeChange } from '@xyflow/react'

export const onNodesChange = (changes: NodeChange[]) => {
  useFlowNodesEdges.setState((state) => {
    // @ts-ignore
    state.nodes = applyNodeChanges(changes, state.nodes)
  })
}
