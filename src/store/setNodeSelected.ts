import { useFlowNodesEdges } from './useFlowNodesEdges.ts'

export function setNodeSelected(id: string) {
  useFlowNodesEdges.setState(({ nodes }) => {
    return {
      nodes: nodes.map((node) => {
        if (node.id === id) {
          return {
            ...node,
            selected: true,
          }
        }
        return { ...node, selected: false }
      }),
    }
  })
}
