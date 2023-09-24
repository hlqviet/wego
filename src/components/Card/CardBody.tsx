import { HTMLAttributes } from 'react'

const CardBody = (props: HTMLAttributes<HTMLDivElement>) => {
  const { className = '', ...rest } = props

  return <div className={`px-4 pb-4 ${className}`} {...rest} />
}

export default CardBody
