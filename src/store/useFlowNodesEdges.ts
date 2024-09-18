import { create } from 'zustand'
import { Edge } from '@xyflow/react'
import { immer } from 'zustand/middleware/immer'
import { v4 as uuid } from 'uuid'
import { ITopicNode } from '../flow/Node/TopicNode/TopicNode.tsx'
import { ICharacterImageNode } from '../flow/Node/CharacterNode/CharacterImageNode/CharacterImageNode.tsx'
import { IBackgroundNode } from '../flow/Node/WorldviewNode/BackgroundNode/BackgroundNode.tsx'
import { IMainNode } from '../flow/Node/CharacterNode/MainNode/MainNode.tsx'
import { ISupportNode } from '../flow/Node/CharacterNode/SupportNode/SupportNode.tsx'
import { ISettingNode } from '../flow/Node/SettingNode/SettingNode.tsx'
import { IChapterNode } from '../flow/Node/StoryNode/ChapterNode/ChapterNode.tsx'
import { ITranslateNode } from '../flow/Node/TranslateNode/TranslateNode.tsx'
import { ICombatNode } from '../flow/Node/WorldviewNode/CombatNode/CombatNode.tsx'
import { IWorldviewNode } from '../flow/Node/WorldviewNode/WorldviewNode.tsx'
import { IStoryNode } from '../flow/Node/StoryNode/StoryNode.tsx'
import { ICharacterNode } from '../flow/Node/CharacterNode/CharacterNode.tsx'

export type ICustomNode =
  | ICharacterImageNode
  | IMainNode
  | ISupportNode
  | ISettingNode
  | ICharacterNode
  | IChapterNode
  | ITopicNode
  | ITranslateNode
  | IBackgroundNode
  | ICombatNode
  | IWorldviewNode
  | IStoryNode

export type INodeType = ICustomNode['type']

type RFState = {
  nodes: ICustomNode[]
  edges: Edge[]
}

export const useFlowNodesEdges = create<RFState>()(
  immer((set, get) => ({
    // @ts-ignore
    nodes: [
      {
        id: '184ffec1-e4f9-4b7c-9109-1e68e7cb75c9',
        type: 'TopicNode',
        data: {
          title: '选定主题',
        },
        selected: true,
        position: {
          x: 0,
          y: 0,
        },
      },
    ],
    // @ts-ignore
    edges: [],
  })),
)
