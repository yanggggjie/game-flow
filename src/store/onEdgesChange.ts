import { applyEdgeChanges, EdgeChange } from '@xyflow/react'
import { useFlowNodesEdges } from './useFlowNodesEdges.ts'

export const onEdgesChange = (changes: EdgeChange[]) => {
  useFlowNodesEdges.setState((state) => {
    state.edges = applyEdgeChanges(changes, state.edges)
  })
}
