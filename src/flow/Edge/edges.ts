import { Edge, MarkerType } from '@xyflow/react'

export const activeEdgeOption = {
  type: 'CustomEdge',
  pathOptions: {
    borderRadius: 1000,
  },
  markerEnd: {
    type: MarkerType.Arrow,
    strokeWidth: 1.5,
    color: '#1E5DFF',
    width: 16,
    height: 16,
  },
  animated: true,
  style: { strokeWidth: 2, stroke: '#1E5DFF' },
} as Omit<Edge, 'id' | 'source' | 'target'>

export const defaultEdgeOption = {
  type: 'CustomEdge',
  pathOptions: {
    borderRadius: 1000,
  },
  markerEnd: {
    type: MarkerType.Arrow,
    strokeWidth: 1.5,
    color: '#ACB2BF',
    width: 16,
    height: 16,
  },
  animated: false,
  style: { strokeWidth: 2, stroke: '#ACB2BF' },
} as Omit<Edge, 'id' | 'source' | 'target'>
