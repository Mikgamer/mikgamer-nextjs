import Head from 'next/head'
import Header from '../components/Header'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Mikgamer | Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="
        bg-neutral-900 
        min-h-screen
        text-center text-neutral-300 font-medium
      ">
        <h1 className='md:text-6xl text-5xl text-neutral-100 pt-16 mb-12'>
          Contact <span className="text-react font-bold">me</span>
        </h1>

        <a className="text-neutral-200 hover:text-amber-600 text-2xl flex gap-2 m-auto w-fit" target="_blank" href="https://www.linkedin.com/in/perard/" rel="noopener noreferrer" >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className='w-8 h-8 object-scale-down' src={"/Linkedin.svg"} alt={"Linkedin logo"}/> Linkedin / Michael Perard
        </a>
      </main>
    </>
  )
}