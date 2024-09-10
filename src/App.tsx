import React from 'react'
import Flow from './flow/flow.tsx'
import { ReactFlowProvider } from '@xyflow/react'
interface Props {}

export default function App({}: Props) {
  return (
    <div>
      <ReactFlowProvider>
        <Flow></Flow>
      </ReactFlowProvider>
    </div>
  )
}
