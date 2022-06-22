import Head from 'next/head'
import Header from '../components/Header'
import { useForm } from "react-hook-form"

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = data => console.log(data)

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

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col max-w-[300px] m-auto">
          <div className='mb-4 flex flex-col'>
            <label className='text-left mb-2' htmlFor="firstName">First name</label>
            <input className='rounded text-neutral-900 px-2' id="firstName" type="text" {...register("firstName", {required: true, maxLength: 50})} />
            {errors.firstName && <span className='text-amber-600'>First name required</span>}
          </div>

          <div className='mb-4 flex flex-col'>
            <label className='text-left mb-2' htmlFor="lastName">Last name</label>
            <input className='rounded text-neutral-900 px-2' id="lastName" type="text" {...register("lastName", {required: true, maxLength: 50})} />
            {errors.lastName && <span className='text-amber-600'>Last name required</span>}
          </div>
          
          <div className='mb-4 flex flex-col'>
            <label className='text-left mb-2' htmlFor="email">Email</label>
            <input className='rounded text-neutral-900 px-2' id="email" type="text" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
            {errors.email && <span className='text-amber-600'>Email required</span>}
          </div>
          
          <div className='mb-4 flex flex-col'>
            <label className='text-left mb-2' htmlFor="message">Message</label>
            <textarea className='rounded text-neutral-900 px-2' rows="4" id="message" type="text" {...register("message", {required: true, maxLength: 2000})} />
            {errors.message && <span className='text-amber-600'>Message required</span>}
          </div>
          
          <input type="submit" value="Send" className='
            bg-amber-700 hover:bg-neutral-200
            rounded
            text-neutral-300 hover:text-amber-600 font-medium text-left
            p-2 px-16 m-auto
            flex justify-center items-center
            duration-100
          '/>
        </form>
      </main>
    </>
  )
}