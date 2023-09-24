import { HTMLAttributes } from 'react'

interface CardImageProps extends HTMLAttributes<HTMLDivElement> {
  src: string
}

const CardImage = (props: CardImageProps) => {
  const { className = '', src, ...rest } = props

  return (
    <div
      className={`h-[200px] bg-no-repeat bg-cover rounded-t-lg`}
      style={{ backgroundImage: `url('${src}')` }}
      {...rest}
    />
  )
}

export default CardImage
