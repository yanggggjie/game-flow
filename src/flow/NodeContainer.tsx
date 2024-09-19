import React, { ReactNode, useState } from 'react'
import { useNodeId, useReactFlow } from '@xyflow/react'
import { ICustomNode } from '../store/useFlowNodesEdges.ts'
import { setNodeSelected } from '../store/setNodeSelected.ts'
import { twMerge } from 'tailwind-merge'
import { GrLinkNext } from 'react-icons/gr'
import { motion } from 'framer-motion'
interface Props {
  children: ReactNode
  showAddNextButton?: boolean
  onAddNextClick: () => void
}

export default function NodeContainer({
  children,
  showAddNextButton = true,
  onAddNextClick,
}: Props) {
  const { getNode } = useReactFlow()
  const id = useNodeId()!
  const node = getNode(id)! as unknown as ICustomNode
  const [showWiderRing, setShowWiderRing] = useState(false)
  const [isHover, setIsHover] = useState(false)

  return (
    <motion.div
      layout={true}
      onClick={() => {
        setNodeSelected(id)
        setShowWiderRing(true)
        const timer = setTimeout(() => {
          setShowWiderRing(false)
          clearTimeout(timer)
        }, 300)
      }}
      className={twMerge(
        'relative',
        node.selected && 'ring-4 rounded-xl',
        'cursor-pointer',
        'transition-shadow',
        showWiderRing && 'ring-8',
      )}
      onMouseEnter={() => {
        setIsHover(true)
      }}
      onMouseLeave={() => {
        setIsHover(false)
      }}
    >
      {children}
      {isHover && showAddNextButton && (
        <div
          className={twMerge(
            'absolute top-1/2 -translate-y-1/2 right-0 translate-x-[100%]',
            'pl-[10px] py-[20px]',
          )}
          onClick={onAddNextClick}
        >
          <div>{<GrLinkNext className={'text-4xl hover:text-blue-400'} />}</div>
        </div>
      )}
    </motion.div>
  )
}
