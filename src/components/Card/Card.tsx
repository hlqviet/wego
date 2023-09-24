import { HTMLAttributes } from 'react'

const Card = (props: HTMLAttributes<HTMLDivElement>) => {
  const { className = '', ...rest } = props

  return (
    <div
      className={`bg-white rounded-lg hover:shadow-md transition ${className}`}
      {...rest}
    />
  )
}

export default Card
