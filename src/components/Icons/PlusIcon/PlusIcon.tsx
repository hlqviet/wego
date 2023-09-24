import { SVGAttributes } from 'react'

const PlusIcon = (props: SVGAttributes<SVGSVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='2.5rem'
      height='2.5rem'
      viewBox='0 0 448 512'
      {...props}
    >
      <rect width='100%' height='100%' fill='#8f64ff' />
      <path
        d='M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z'
        fill='#fff'
      />
    </svg>
  )
}

export default PlusIcon
