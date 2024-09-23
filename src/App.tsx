import React from 'react'
import Flow from './flow/flow.tsx'
import './global-style.css'
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
