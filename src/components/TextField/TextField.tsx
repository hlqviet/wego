import { cloneElement, InputHTMLAttributes, ReactElement } from 'react'

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  startIcon?: ReactElement
}

const TextField = (props: TextFieldProps) => {
  const { className = '', startIcon, ...rest } = props

  return (
    <div>
      {startIcon &&
        cloneElement(startIcon, {
          className: 'absolute min-w-[2.5rem] min-h-[2.5rem] p-3'
        })}
      <input
        className={`p-2 text-sm md:text-base disabled:cursor-not-allowed ${
          startIcon ? 'pl-10' : ''
        } rounded-lg ${className}`}
        role='textbox'
        {...rest}
      />
    </div>
  )
}

export default TextField
