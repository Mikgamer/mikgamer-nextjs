import Link from 'next/link'

export default function ContactBlock() {
  return (
    <Link href="/contact">
      <a className="
        bg-amber-700 hover:bg-neutral-200
        w-full md:w-auto min-h-56
        rounded-none md:rounded
        text-neutral-300 hover:text-amber-600 font-medium text-left
        p-6 md:px-32 gap-2
        flex justify-center items-center
        duration-100
      ">
        <h2 className="text-5xl">
          Contact me
        </h2>
      </a>
    </Link>
  )
}