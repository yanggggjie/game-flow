import { useNodeId, useReactFlow } from '@xyflow/react'

export function useHasChild() {
  const { getEdges } = useReactFlow()
  const id = useNodeId()!
  const hasChild = getEdges().some((edge) => {
    return edge.source === id
  })
  return {
    hasChild,
  }
}
