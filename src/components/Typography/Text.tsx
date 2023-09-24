import { HTMLAttributes } from 'react'

const Text = (props: HTMLAttributes<HTMLSpanElement>) => {
  const { className = '', ...rest } = props

  return <span className={`text-sm md:text-base ${className}`} {...rest} />
}

export default Text
