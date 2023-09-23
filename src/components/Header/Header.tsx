import Link from 'next/link'

import Logo from '@/src/components/Logo'

const Header = () => {
  return (
    <header className='px-6 py-4 bg-white'>
      <Link href='/'>
        <Logo className='bg-[0_0]' />
      </Link>
    </header>
  )
}

export default Header
