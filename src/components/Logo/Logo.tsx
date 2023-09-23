import { HTMLAttributes } from 'react'

const Logo = (props: HTMLAttributes<HTMLSpanElement>) => {
  const { className = '', ...rest } = props

  return (
    <span
      className={`block w-[100px] h-[40px] bg-[url('/logo.webp')] bg-no-repeat bg-[length:100px_81px] ${className}`}
      {...rest}
    />
  )
}

export default Logo
