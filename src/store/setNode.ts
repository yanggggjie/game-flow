import { ICustomNode, useFlowNodesEdges } from './useFlowNodesEdges.ts'

export function setNode(id: string, partialNode: Partial<ICustomNode>) {
  useFlowNodesEdges.setState(({ nodes }) => {
    return {
      nodes: nodes.map((node) => {
        if (node.id === id) {
          return {
            ...node,
            ...partialNode,
          }
        }
        return node
      }),
    }
  })
}
