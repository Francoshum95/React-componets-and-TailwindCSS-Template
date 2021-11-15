import Head from 'next/head'
import Link from 'next/link'

export default function Home() {

  return (
    <div className="flex flex-col items-center">
      <Head>
        <title>TailwindCSS </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mt-10 flex flex-col">
        <h1 className="font-extrabold text-[3rem] text-white select-none text-center">TailwindCSS Template</h1>
        <div className="felx grid grid-cols-2 mt-5">
          <div className="justify-self-center mb-10">
            <Link href="/button">
              <button className="p-4 bg-gray-800 rounded-md w-[10rem] h-[10rem] text-white cursor-pointer hover:bg-gray-500 text-3xl font-bold transition-colors duration-200">Button</button>
            </Link>
          </div>
          <div className="justify-self-center">
            <Link href="/navbar">
              <button className="p-4 bg-gray-800 rounded-md w-[10rem] h-[10rem] text-white cursor-pointer hover:bg-gray-500 text-3xl font-bold transition-colors duration-200">Navbar</button>
            </Link>
          </div>
          <div className="justify-self-center">
            <Link href="/input">
              <button className="p-4 bg-gray-800 rounded-md w-[10rem] h-[10rem] text-white cursor-pointer hover:bg-gray-500 text-3xl font-bold transition-colors duration-200">Input</button>
            </Link>
          </div>
          <div className="justify-self-center">
            <div className="p-4 bg-gray-800 rounded-md w-[10rem] h-[10rem] text-white text-3xl font-bold"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
