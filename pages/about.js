import Head from 'next/head'
import Link from 'next/link'
import Project from './components/Project'
import { data } from '../data/data'
import { useState } from 'react'

export default function About() {

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
        <h1 className='md:text-6xl sm:text-5xl text-4xl text-neutral-100 py-8'>
          <span className="text-react font-bold">My</span> projects
          <> </>
          <a target="_blank" href="https://github.com/Mikgamer/" rel="noopener noreferrer" className="md:text-4xl sm:text-3xl text-2xl align-top text-amber-600 hover:text-neutral-200 underline underline-offset-2 decoration-2">
            Github
          </a>
        </h1>

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