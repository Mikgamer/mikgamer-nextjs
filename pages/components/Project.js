import TechLogo from "./TechLogo"

export default function Project( {title, desc, links:{view, github}, techs} ) {
  return (
    <div className="
      bg-neutral-700 
      w-full md:w-auto min-h-56
      rounded-none md:rounded
      text-neutral-300 font-medium text-left
      p-8 gap-2
      flex flex-col justify-between
    ">
      <div>
        <h2 className="text-4xl">
          {title}
          <br className="md:hidden"/>
          <> </>
          {view?(
          <a target="_blank" href={view} rel="noopener noreferrer" className="text-xl align-top text-react hover:text-neutral-200 underline underline-offset-2 decoration-2">
            View
          </a>
          ):""}
          <> </>
          {github?(
          <a target="_blank" href={github} rel="noopener noreferrer" className="text-xl align-top text-amber-600 hover:text-neutral-200 underline underline-offset-2 decoration-2">
            Github
          </a>
          ):""}
        </h2>
        <p className="md:whitespace-pre-line">{desc}</p>
      </div>
      <div className="flex gap-2 flex-wrap">
        {techs?.map((tech,i)=><TechLogo key={i} tech={tech} />)}
      </div>
    </div>
  )
}