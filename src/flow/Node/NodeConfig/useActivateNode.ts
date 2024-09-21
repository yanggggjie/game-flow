import { useFlowNodesEdges } from '@/store/useFlowNodesEdges.ts'

export function useActivateNode() {
  const { nodes, edges } = useFlowNodesEdges()
  const activeNode = nodes.filter((node) => {
    return node.selected
  })[0]

  return {
    activeNode,
  }
}
