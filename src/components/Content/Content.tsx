import { HTMLAttributes } from 'react'

const Content = (props: HTMLAttributes<HTMLDivElement>) => {
  return <main className='py-4 md:px-6' {...props} />
}

export default Content
