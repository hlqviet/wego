import { HTMLAttributes } from 'react'

const CardHeading = (props: HTMLAttributes<HTMLHeadingElement>) => {
  const { className = '', ...rest } = props

  return <h3 className={`px-4 py-4 font-semibold ${className}`} {...rest} />
}

export default CardHeading
