import React, { useCallback, useState } from 'react'
import {
  INodeType,
  useFlowNodesEdges,
} from '../../../store/useFlowNodesEdges.ts'
import { node } from 'globals'
import TopicConfig from '@/flow/Node/NodeConfig/TopicConfig.tsx'
import SettingConfig from '@/flow/Node/NodeConfig/SettingConfig.tsx'
import CharacterImageConfig from '@/flow/Node/NodeConfig/CharacterImageConfig.tsx'
import TranslateConfig from '@/flow/Node/NodeConfig/TranslateConfig.tsx'
import { useOnSelectionChange } from '@xyflow/react'
import { LucideDribbble } from 'lucide-react'
import { twMerge } from 'tailwind-merge'
interface Props {}

const TopicConfigNodeType: INodeType[] = ['TopicNode']
const SettingConfigNodeType: INodeType[] = [
  'MainNode',
  'SupportNode',
  'SettingNode',
  'CharacterNode',
  'ChapterNode',
  'TopicNode',
  'BackgroundNode',
  'CombatNode',
  'WorldviewNode',
  'StoryNode',
]
const CharacterImageConfigNodeType: INodeType[] = ['CharacterImageNode']
const TranslateConfigNodeType: INodeType[] = ['TranslateNode']

function getConfig(nodeType: INodeType) {
  if (TopicConfigNodeType.includes(nodeType)) return TopicConfig
  if (SettingConfigNodeType.includes(nodeType)) return SettingConfig
  if (CharacterImageConfigNodeType.includes(nodeType))
    return CharacterImageConfig
  if (TranslateConfigNodeType.includes(nodeType)) return TranslateConfig
  throw Error('no Such node type')
}

export default function NodeConfig({}: Props) {
  const { nodes, edges } = useFlowNodesEdges()
  const [showWiderRing, setShowWiderRing] = useState(false)
  const activeNode = nodes.filter((node) => {
    return node.selected
  })[0]

  const onChange = useCallback(({}) => {
    const timer = setTimeout(() => {
      setShowWiderRing(false)
      clearTimeout(timer)
    }, 300)
    setShowWiderRing(true)
  }, [])

  useOnSelectionChange({
    onChange,
  })

  const Config = getConfig(activeNode.type)
  return (
    <div
      className={twMerge(
        'w-[300px] h-[600px] rounded-xl ring-8 bg-red-300',
        'transition-shadow',
        showWiderRing && 'ring-[15px]',
      )}
    >
      <Config></Config>
    </div>
  )
}
