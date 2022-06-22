import Head from 'next/head'
import Link from 'next/link'
import Project from './components/Project'
import { data } from '../data/data'
import { useState } from 'react'

export default function About() {
  const calcAge = () => {
    let currentDate = new Date(),
        age = currentDate.getFullYear() - 2001
    age = currentDate.getMonth() > 7 ? age : age - 1
    return age
  }

  return (
    <>
      <Head>
        <title>Mikgamer | About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="
        bg-neutral-900 
        min-h-screen
        text-center text-neutral-300 font-medium
      ">
        <h1 className='md:text-6xl text-5xl text-neutral-100 pt-8 md:pt-16'>
          <span className="text-react font-bold">My</span> projects
          <> </>
          <br className="md:hidden"/>
          <a target="_blank" href="https://github.com/Mikgamer/" rel="noopener noreferrer" className="md:text-4xl text-3xl align-top text-amber-600 hover:text-neutral-200 underline underline-offset-2 decoration-2">
            🐱Github
          </a>
        </h1>

        <h3 className='p-8 text-xl'>
          Hi👋, I am Michael, a {calcAge()} years old Frontend developer👨‍💻
          <br />
          I love cats🐈, technology🔬🤖, video games⛏️ and web browsing🌌
        </h3>

        <section className='
          m-auto px-8 pb-16
          flex flex-wrap md:justify-start justify-center md:flex-row flex-col items-center gap-8
        '>
          {data?.map((item,i)=><Project key={i} title={item.title} desc={item.desc} techs={item.techs} links={item.links}/>)}
        </section>
      </main>
    </>
  )

}