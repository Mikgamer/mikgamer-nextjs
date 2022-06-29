import Link from 'next/link'

export default function Header() {
  return (
    <header className='bg-neutral-800 text-lg px-8 py-0.5 fixed top-0 flex justify-between gap-2 w-full leading-10'>
      <Link href="/">
        <a className="text-amber-600 hover:text-neutral-200">mikgamer.fr</a>
      </Link>
      <div className='flex gap-4'>
        <Link href="/about">
          <a className="text-amber-600 hover:text-neutral-200">About</a>
        </Link>
        <Link href="/contact">
          <a className="text-amber-600 hover:text-neutral-200">Contact</a>
        </Link>
      </div>
    </header>
  )
}