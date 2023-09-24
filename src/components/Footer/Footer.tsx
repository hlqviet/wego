import { Text } from '@/src/components/Typography'

const Footer = () => {
  return (
    <footer className='px-6 py-4 text-white bg-zinc-900'>
      <Text>&copy; {new Date().getFullYear()} Wego Pte Ltd</Text>
    </footer>
  )
}

export default Footer
