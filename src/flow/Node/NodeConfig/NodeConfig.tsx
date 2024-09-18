import React, { useCallback, useState } from 'react'
import {
  INodeType,
  useFlowNodesEdges,
} from '../../../store/useFlowNodesEdges.ts'
import TopicConfig from '@/flow/Node/NodeConfig/TopicConfig.tsx'
import SettingConfig from '@/flow/Node/NodeConfig/SettingConfig.tsx'
import CharacterImageConfig from '@/flow/Node/NodeConfig/CharacterImageConfig.tsx'
import TranslateConfig from '@/flow/Node/NodeConfig/TranslateConfig.tsx'
import { useOnSelectionChange } from '@xyflow/react'
import { twMerge } from 'tailwind-merge'
import { FaCompressAlt, FaExpandAlt } from 'react-icons/fa'
import Chat from '@/flow/Node/NodeConfig/Chat/Chat.tsx'
import ChatChat from '@/flow/Node/NodeConfig/Chat/ChatChat.tsx'
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
  const [isExpand, setIsExpand] = useState(true)

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
        'w-[300px] h-[600px]',
        ' rounded-xl ring-8 bg-gray-200',
        'transition-all',
        showWiderRing && 'ring-[15px]',
        'relative',
        isExpand && 'w-[80vw] h-[80vh]',
        'flex flex-col',
      )}
    >
      <div
        className={'absolute top-1 left-1 rotate-90 hover: ring-2 bg-white'}
        onClick={() => {
          setIsExpand(!isExpand)
        }}
      >
        {isExpand ? <FaCompressAlt /> : <FaExpandAlt />}
      </div>
      <div
        className={
          'font-bold flex flex-row items-center justify-center h-[20px] select-none'
        }
      >
        {activeNode.data.title}
      </div>
      <div className={'flex-1 w-full  rounded-xl overflow-hidden'}>
        {/*<Chat nodeType={activeNode.type}></Chat>*/}
        <ChatChat></ChatChat>
      </div>
    </div>
  )
}
