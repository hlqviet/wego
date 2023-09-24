import { HTMLAttributes } from 'react'

const Paragraph = (props: HTMLAttributes<HTMLParagraphElement>) => {
  const { className = '', ...rest } = props

  return <p className={`p-2 ${className}`} {...rest} />
}

export default Paragraph
