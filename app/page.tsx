// import Image from 'next/image'
// import styles from './page.module.css'
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from '@/app/navbar'
import Book from '@/app/book'
import Upcoming from '@/app/upcoming'
import Footer from '@/app/footer'
import { Suspense } from 'react'
import UpcomingSkeleton from '@/app/upcomingskeleton'

export default function Home() {
  return (
    <ChakraProvider>
      <main>
        <NavBar />
        <Book />
        <Upcoming />
        <Footer />
      </main>
    </ChakraProvider>
  )
}
