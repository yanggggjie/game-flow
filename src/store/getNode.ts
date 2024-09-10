import { useFlowNodesEdges } from './useFlowNodesEdges.ts'

export const getNode = (id: string) => {
  return (
    useFlowNodesEdges.getState().nodes.find((node) => {
      return node.id == id
    }) || null
  )
}
