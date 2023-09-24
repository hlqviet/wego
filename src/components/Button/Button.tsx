import { ButtonHTMLAttributes } from 'react'

const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { className = '', ...rest } = props

  return (
    <button
      className={`px-4 py-1 text-sm md:px-8 md:py-2 md:text-base border border-solid border-yellow-400 rounded-xl hover:bg-yellow-400 active:bg-yellow-300 disabled:text-gray-300 disabled:border-gray-300 disabled:hover:bg-transparent disabled:cursor-not-allowed transition ${className}`}
      {...rest}
    />
  )
}

export default Button
