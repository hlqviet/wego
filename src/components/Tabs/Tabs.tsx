import { HTMLAttributes, Key } from 'react'

import Tab from '@/src/components/Tabs/Tab'

interface TabsProps extends HTMLAttributes<HTMLUListElement> {
  activeKey: Key
  tabs: {
    key: Key
    text: string
    value: string | number
  }[]
  onTabClick: (value: string | number) => void
}

const Tabs = (props: TabsProps) => {
  const { activeKey, tabs, onTabClick, ...rest } = props

  return (
    <ul {...rest}>
      {tabs.map(({ key, text, value }) => (
        <Tab
          key={key}
          value={value}
          className={key === activeKey ? 'bg-yellow-400' : ''}
          onClick={() => onTabClick(value)}
        >
          {text}
        </Tab>
      ))}
    </ul>
  )
}

export default Tabs
