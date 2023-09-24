import { LiHTMLAttributes } from 'react'

interface TabProps extends LiHTMLAttributes<HTMLLIElement> {
  disabled?: boolean
}

const Tab = (props: TabProps) => {
  const { className = '', disabled, ...rest } = props
  const disabledClassNames = disabled
    ? 'bg-gray-300 hover:bg-gray-300 active:bg-gray-300 border-gray-300 active:border-gray-300 pointer-events-none'
    : ''

  return (
    <li
      className={`px-3 py-1 text-xs md:px-6 md:py-3 md:text-base hover:bg-yellow-400 active:bg-yellow-300 inline-block cursor-pointer border border-solid border-yellow-400 first:rounded-l-xl last:rounded-r-xl transition ${disabledClassNames} ${className}`}
      {...rest}
    />
  )
}

export default Tab
