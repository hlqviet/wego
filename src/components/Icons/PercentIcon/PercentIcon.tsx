import { SVGAttributes } from 'react'

const PercentIcon = (props: SVGAttributes<SVGSVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='2.5rem'
      height='2.5rem'
      viewBox='0 0 384 512'
      {...props}
    >
      <rect width='100%' height='100%' fill='#ff696f' />
      <path
        d='M374.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-320 320c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l320-320zM128 128A64 64 0 1 0 0 128a64 64 0 1 0 128 0zM384 384a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z'
        fill='#fff'
      />
    </svg>
  )
}

export default PercentIcon
