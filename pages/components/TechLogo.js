export default function TechLogo( {tech} ) {
  return (
    <div title={tech} className='
      w-10 h-10 rounded bg-neutral-500
      flex justify-center items-center
    '>
      { /* eslint-disable-next-line @next/next/no-img-element */ }
      <img className='w-8 h-8 object-scale-down' src={"/"+tech+".svg"} alt={tech+" logo"}/>
    </div>
  )
}