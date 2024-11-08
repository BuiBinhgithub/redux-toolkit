import React, { useCallback, useState } from 'react'
import { CreatePost, PostList } from './components'
import { Tabs } from 'antd'
import TabPane from 'antd/es/tabs/TabPane'

export enum TabsEnum {
  POST = 'post',
  LIST = 'list'
}
export const Blog = () => {
  const [tabs, setTabs] = useState<TabsEnum>(TabsEnum.POST)
  const handleChageTab = useCallback((e: string) => {
    setTabs(e as TabsEnum)
  }, [])
  return (
    <div className='p-5'>
      <Tabs defaultActiveKey={tabs} onChange={handleChageTab}>
        <TabPane tab='Create Post' key={TabsEnum.POST}>
          <CreatePost />
        </TabPane>
        <TabPane tab='Post List' key={TabsEnum.LIST}>
          <PostList />
        </TabPane>
      </Tabs>
    </div>
  )
}
