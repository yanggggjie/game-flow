import { ProChat, ProChatInstance } from '@ant-design/pro-chat'
import { Avatar, Card, Spin } from 'antd'
import { useTheme } from 'antd-style'
import { useRef, useState } from 'react'

function LoadingSearch() {
  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }, 2000)

  return (
    <Card>
      <Spin spinning={loading}>
        {loading ? '正在后台帮你执行操作' : '操作完成！'}
      </Spin>
    </Card>
  )
}

import CatAvatar from '@/assets/cat-avatar.jpeg'
import { INodeType } from '@/store/useFlowNodesEdges.ts'
import { MockResponse } from '@/flow/Node/NodeConfig/Chat/streamResponse.ts'

export default function Chat({ nodeType }: { nodeType: INodeType }) {
  const theme = useTheme()
  const chatRef = useRef<ProChatInstance>()

  return (
    <div
      style={{ background: theme.colorBgLayout }}
      className={'h-full rounded-xl'}
    >
      <ProChat
        userMeta={{
          avatar: '😄',
          // title: 'user',
        }}
        assistantMeta={{
          avatar: CatAvatar,
          // title: 'assistant',
        }}
        chatRef={chatRef}
        transformToChatMessage={async (pre) => {
          try {
            const preJson = JSON.parse(pre)
            const { delta } = preJson
            const { content, type } = delta
            if (content === 'Searching' && type === 'function') {
              // @ts-ignore
              chatRef.current.pushChat({
                content: 'Doding!',
                id: 'opDqGn0G',
                role: 'function',
              })
            } else {
              return content
            }
          } catch (error) {
            console.log(error)
          }
          return ''
        }}
        chatItemRenderConfig={{
          avatarRender: (item) => {
            if (item?.originData?.role === 'function') {
              return (
                <Avatar
                  size={'large'}
                  src={
                    'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
                  }
                />
              )
            }
          },

          contentRender: (item) => {
            if (item?.originData?.role === 'function') {
              return <LoadingSearch />
            }
          },
        }}
        request={async (x) => {
          const question = x[x.length - 1].content as string
          // todo
          // const mockResponse = new MockSSEResponse(
          //   generateDataArrayFromSentence(questionToAnswer(question)),
          // )
          const mockedData: string = `这是一段模拟的流式字符串数据。本次会话传入了123条消息`
          const mockResponse = new MockResponse(mockedData, 0)
          return mockResponse.getResponse()
        }}
      />
    </div>
  )
}
