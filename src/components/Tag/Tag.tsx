import { HTMLAttributes } from 'react'

const Tag = (props: HTMLAttributes<HTMLDivElement>) => {
  const { className = '', ...rest } = props

  return (
    <div
      className={`inline-block px-2 py-1 text-sm bg-gray-300 hover:bg-gray-200 rounded-md cursor-pointer transition ${className}`}
      {...rest}
    />
  )
}

export default Tag
