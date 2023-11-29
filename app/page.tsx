// import Image from 'next/image'
// import styles from './page.module.css'
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from '@/app/navbar'
import Booking from './booking'

export default function Home() {
  return (
    <ChakraProvider>
      <main>
        <NavBar />
        <Booking />
      </main>
    </ChakraProvider>
  )
}
