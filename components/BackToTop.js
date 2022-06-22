import { useEffect } from "react"

export default function BackToTop() {
  let goToTop

  useEffect(() => {
    goToTop = () => window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <div className="
      w-14 h-14 md:w-20 md:h-20
      hover:cursor-pointer animate-pulse hover:animate-none duration-100
      flex justify-center items-center
      bg-neutral-800/75 rounded
      fixed bottom-8 right-8 md:bottom-16 md:right-16
      text-amber-600 font-bold text-3xl
    " onClick={()=>goToTop()}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" className="fill-amber-600 w-6 h-6 md:w-10 md:h-10">
          <path d="M8.65,1.158 L3.165,7.098 C2.954,7.332 2.956,7.712 3.167,7.947 L7.035,7.952 L7.035,15.976 C7.035,16.529 7.474,16.976 8.017,16.976 L9.982,16.976 C10.525,16.976 10.964,16.529 10.964,15.976 L10.964,7.956 L14.775,7.961 C14.984,7.73 14.982,7.349 14.771,7.113 L9.414,1.159 C9.201,0.927 8.861,0.925 8.65,1.158 L8.65,1.158 Z"/>
      </svg>
    </div>
  )
}