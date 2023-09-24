import { ButtonHTMLAttributes } from 'react'

const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { className = '', ...rest } = props

  return (
    <button
      className={`px-8 py-2 border border-solid border-yellow-400 rounded-xl hover:bg-yellow-400 active:bg-yellow-300 transition ${className}`}
      {...rest}
    />
  )
}

export default Button
