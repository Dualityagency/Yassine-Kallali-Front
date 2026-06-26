import { ArrowRight } from "lucide-react"
import { ReactNode } from "react"

type CtaButtonProps = {
  children: ReactNode
  onClick?: () => void
  className?: string
  variant?: "blue" | "white"
  textWhenHover?:"blue" | "white"
}

const CtaButton = ({
  children,
  onClick,
  className = "",
  variant = "blue",
  textWhenHover="white"
}: CtaButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`group relative flex flex-row items-center overflow-hidden rounded-[8px] bg-transparent px-1.5 py-1.5 transition-all duration-300 hover:bg-transparent lg:gap-4 ${className}`}
    >
      <span className={`absolute inset-0 z-0 rounded-[8px] ${variant =="white" ? "bg-white":"bg-primary"} transition-all duration-500 ease-in-out group-hover:left-[calc(100%-2.5rem)] lg:group-hover:left-[calc(100%-3.3rem)]`} />

      <span className={`relative z-10 whitespace-nowrap text-[12.93px] lg:text-[16px] font-medium transition-colors duration-300 px-2  ${textWhenHover === "blue" ? "group-hover:text-primary" : textWhenHover=="white"? "group-hover:text-white":""} ${variant=="blue"? "text-white":"text-primary"}`}>
        {children}
      </span>

      <div className={`relative z-10 flex size-7 shrink-0 items-center justify-center lg:size-10 ${variant =="white" ? "bg-primary":"bg-white"} rounded-[7px]`}>
        <ArrowRight className={`${variant =="white" ? "text-white":"text-primary"} -rotate-45 transition-transform duration-500 group-hover:rotate-0 size-3.5 lg:size-5`}/>
      </div>
    </button>
  )
}

export default CtaButton