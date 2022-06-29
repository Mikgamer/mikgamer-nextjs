import React from 'react'
import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import BackToTop from '../components/BackToTop'
import Header from '../components/Header'
import ContactBlock from '../components/ContactBlock'
import Project from "../components/Project"
import { data } from '../data/data'

export default function About() {
  const title = useRef(null)
  const [ isVisible, setIsVisible ] = useState(true)

  const callbackFunction = (entries) => {
    const [ entry ] = entries
    setIsVisible(entry.isIntersecting)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction)
    if (title.current) observer.observe(title.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => { if(title.current) observer.unobserve(title.current) }
  }, [title])

  const calcAge = () => {
    let currentDate = new Date(),
        age = currentDate.getFullYear() - 2001
    return currentDate.getMonth() > 7 ? age : age - 1
  }

  return (
    <>
      <Head>
        <title>Mikgamer | About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="
        bg-neutral-900 
        min-h-screen
        text-center text-neutral-300 font-medium
      ">
        <h1 className='md:text-6xl text-5xl text-neutral-100 pt-20 mb-12' ref={title}>
          <span className="text-react font-bold">My</span> projects
          <> </>
          <br className="md:hidden"/>
          <a target="_blank" href="https://github.com/Mikgamer/" rel="noopener noreferrer" className="md:text-4xl text-3xl align-top text-amber-600 hover:text-neutral-200 underline underline-offset-2 decoration-2">
            Github
          </a>
        </h1>

        <h3 className='mb-12 text-xl'>
          Hi👋, I am <span className="text-react">Michael</span>, a {calcAge()} years old Frontend developer
          <br />
          I love cats, technology, video games, reading and web browsing🌌
        </h3>

        <section className='
          m-auto px-8 pb-16
          flex flex-wrap md:justify-between justify-center md:flex-row flex-col items-center gap-8
        '>
          {data?.map((item,i)=><React.Fragment key={i}>
            <Project title={item.title} desc={item.desc} techs={item.techs} links={item.links}/>
            {i===7?<ContactBlock />:""}
          </React.Fragment>)}
        </section>
      </main>

      {isVisible?"":<BackToTop />}
    </>
  )

}