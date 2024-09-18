import { ProChat } from '@ant-design/pro-chat'
import { useTheme } from 'antd-style'

import { Alert } from 'antd'
import { MockResponse } from '@ant-design/pro-chat/es/ProChat/mocks/streamResponse'
import { questionToAnswer } from '@/data/QADataLoader.ts'
import CatAvatar from '@/assets/cat-avatar.jpeg'

export default () => {
  const theme = useTheme()

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
        // initialChats={initialChats}
        onScroll={(event) => {}}
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
              >
                {/*<span*/}
                {/*  style={{*/}
                {/*    textAlign: 'center',*/}
                {/*    display: 'inline-flex',*/}
                {/*    alignItems: 'center',*/}
                {/*    justifyContent: 'center',*/}
                {/*    height: 24,*/}
                {/*    padding: 4,*/}
                {/*    borderRadius: theme.borderRadius,*/}
                {/*    border: '1px solid ' + theme.colorSplit,*/}
                {/*    backgroundColor: theme.colorPrimaryBg,*/}
                {/*  }}*/}
                {/*>*/}
                {/*  🦾 使用 mock 生成*/}
                {/*</span>*/}
              </div>
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
