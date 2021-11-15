import Head from 'next/head'
import Link from "next/link"
import NavbarCard from '../components/NavbarCard'

export default function navbar() {
  return (
    <div className="flex flex-col">
      <Head>
        <title>TailwindCSS - Navbar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="m-5">
        <Link href="/">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white cursor-pointer hover:opacity-20 transition-opacity duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
          </svg>
        </Link>
      </nav>
      <NavbarCard/>
    </div>
  )
}
