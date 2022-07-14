import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mikgamer | Frontend dev</title>
        <meta name="description" content="Michael Perard - Frontend developer" />
        <meta name="theme-color" content="#171717" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
      </Head>

      <main className="bg-neutral-900 min-h-screen flex items-center justify-center text-center flex-col overflow-hidden font-medium">
        <h1 className="text-neutral-300 sm:text-3xl md:text-5xl text-xl">Michael Perard</h1>
        <h2 className="text-neutral-100 sm:text-8xl md:text-9xl text-6xl">Frontend developer</h2>
        <h2 className="text-neutral-300 sm:text-3xl md:text-5xl sm:mt-8 text-xl mt-4">
          <span className="text-react font-bold">ReactJS</span>
          <> and </>
          <Link href="/about">
            <a className="text-amber-600 hover:text-neutral-200 underline underline-offset-2 decoration-2">more...</a>
          </Link>
        </h2>
      </main>
    </>
  )
}
