import { ArrowRight } from "lucide-react"
import Link from "next/link"


export default function(){
    
    return(
        <Link href={"/"} className="group">
        <div className="relative z-10 flex size-[31.4px] shrink-0 items-center justify-center lg:size-9.25 group-hover:bg-white bg-primary rounded-[7px]">
        <ArrowRight className="text-white -rotate-45 transition-transform duration-500 group-hover:rotate-45 group-hover:text-primary size-3.5 lg:size-4" />
      </div>
      </Link>
    )
}