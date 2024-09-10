import ELK from 'elkjs/lib/elk.bundled'
import { useReactFlow } from '@xyflow/react'
import { useFlowNodesEdges } from '../store/useFlowNodesEdges.ts'

const elk = new ELK()

const layered = {
  'elk.direction': 'RIGHT',
  'elk.algorithm': 'elk.layered',
  'elk.layered.spacing.nodeNodeBetweenLayers': 100,
  'elk.spacing.nodeNode': 100,
  'elk.layered.nodePlacement.strategy': 'NETWORK_SIMPLEX',
  'elk.layered.nodePlacement.favorStraightEdges': true,
  'elk.layered.considerModelOrder.strategy': 'NODES_AND_EDGES',
  'elk.layered.wrapping.strategy': 'NONE',
  'elk.edgeRouting': 'POLYLINE',
  'elk.layered.thoroughness': 'HIGH',
}

export default function useLayout() {
  const { getNodes, getEdges } = useReactFlow()

  const layoutOptions = layered

  async function doLayout() {
    const graph = {
      id: 'root',
      layoutOptions: layoutOptions,
      children: getNodes(),
      edges: getEdges(),
    } as any

    const { children } = await elk.layout(graph)

    children?.forEach((node) => {
      // @ts-ignore
      node.position = { x: node.x, y: node.y }
    })

    useFlowNodesEdges.setState(() => {
      return {
        nodes: children,
      }
    })
  }

  return { doLayout }
}
