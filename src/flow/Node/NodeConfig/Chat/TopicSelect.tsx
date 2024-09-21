import React, { Dispatch, useState } from 'react'
import { Badge } from '@/components/ui/badge.tsx'
import { useProChat } from '@ant-design/pro-chat'
interface Props {
  setIsSelectedTopic: Dispatch<boolean>
}

export default function TopicSelect({ setIsSelectedTopic }: Props) {
  const [topicList, setTopicList] = useState([
    {
      title: '封神演义',
    },
    {
      title: '红楼梦',
    },
    {
      title: '水浒传',
    },
  ])
  const proChat = useProChat()

  return (
    <div className={'relative '} style={{ order: -1 }}>
      <div
        className={'absolute -translate-y-[100%] flex flex-col w-full gap-2'}
      >
        <div className={'text-xs'}>推荐主题 :</div>
        <div className={'flex flex-row flex-wrap gap-1 hover:cursor-pointer '}>
          {topicList.map((item) => {
            return (
              <Badge
                key={item.title}
                className={'hover:bg-gray-200'}
                variant="outline"
                onClick={() => {
                  proChat.sendMessage(item.title)
                  setIsSelectedTopic(true)
                }}
              >
                《{item.title}》
              </Badge>
            )
          })}
        </div>
      </div>
    </div>
  )
}
