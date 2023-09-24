import { LiHTMLAttributes } from 'react'

const Tab = (props: LiHTMLAttributes<HTMLLIElement>) => {
  const { className = '', ...rest } = props

  return (
    <li
      className={`px-3 py-1 text-xs md:px-6 md:py-3 md:text-base hover:bg-yellow-400 inline-block cursor-pointer border border-solid border-yellow-400 first:rounded-l-xl last:rounded-r-xl transition ${className}`}
      {...rest}
    />
  )
}

export default Tab
