import { ProChat } from '@ant-design/pro-chat'
import { useTheme } from 'antd-style'

import { Alert } from 'antd'
import { MockResponse } from '@ant-design/pro-chat/es/ProChat/mocks/streamResponse'
import { questionToAnswer } from '@/data/QADataLoader.ts'
import CatAvatar from '@/assets/cat-avatar.jpeg'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import TopicSelect from '@/flow/Node/NodeConfig/Chat/TopicSelect.tsx'
import { useActivateNode } from '@/flow/Node/NodeConfig/useActivateNode.ts'

export default function ChatChat() {
  const theme = useTheme()
  const [portalContainer, setPortalContainer] = useState<HTMLDivElement | null>(
    null,
  )
  const { activeNode } = useActivateNode()
  const isTopicNode = activeNode.type === 'TopicNode'
  const [isSelectedTopic, setIsSelectedTopic] = useState(false)

  useEffect(() => {
    const container = document.querySelector('.ant-pro-chat-input-area')
    if (container) {
      setPortalContainer(container as HTMLDivElement)
    }
  }, [])

  return (
    <div
      style={{ background: theme.colorBgLayout }}
      className={'h-full rounded-xl'}
    >
      {portalContainer &&
        !isSelectedTopic &&
        isTopicNode &&
        createPortal(
          <TopicSelect setIsSelectedTopic={setIsSelectedTopic} />,
          portalContainer,
        )}
      <ProChat
        userMeta={{
          avatar: '😄',
          // title: 'user',
        }}
        assistantMeta={{
          avatar: CatAvatar,
          // title: 'assistant',
        }}
        chatItemRenderConfig={{
          titleRender: (item, dom) => {
            if (item.placement === 'right') return dom
            return (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '8px 0',
                  gap: 8,
                }}
              ></div>
            )
          },
          actionsRender: false,
          render: (item, dom, defaultDom) => {
            if (item?.originData?.role === 'notification') {
              return (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Alert message={item.message} type="info" showIcon />
                </div>
              )
            }
            return defaultDom
          },
        }}
        request={async (messages) => {
          const question = messages[messages.length - 1].content as string
          const mockResponse = new MockResponse(questionToAnswer(question), 10)
          return mockResponse.getResponse()
        }}
      />
    </div>
  )
}
