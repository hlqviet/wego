import { LiHTMLAttributes } from 'react'

const Tab = (props: LiHTMLAttributes<HTMLLIElement>) => {
  const { className = '', ...rest } = props

  return (
    <li
      className={`px-6 py-3 hover:bg-yellow-400 inline cursor-pointer border border-solid border-yellow-400 first:rounded-l-xl last:rounded-r-xl transition ${className}`}
      {...rest}
    />
  )
}

export default Tab
