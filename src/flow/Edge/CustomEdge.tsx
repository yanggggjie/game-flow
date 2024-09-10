import {
  BaseEdge,
  EdgeProps,
  getSmoothStepPath,
  Position,
  SmoothStepEdge,
} from '@xyflow/react'

interface Props extends EdgeProps {}

export default function CustomEdge(props: Props) {
  const [edgePath] = getSmoothStepPath({
    sourceX: props.sourceX,
    sourceY: props.sourceY,
    targetX: props.targetX,
    targetY: props.targetY,
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    borderRadius: 1000,
  })

  return (
    <>
      <BaseEdge id={props.id} path={edgePath} markerEnd={'arrow'} />
      <SmoothStepEdge {...props}></SmoothStepEdge>
    </>
  )
}
