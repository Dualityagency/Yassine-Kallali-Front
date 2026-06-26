import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "w-full min-w-0 rounded-[9.86px] border-[1.23px] border-border bg-white px-4 py-2.5 lg:py-3 text-[#6B7280] text-[17px] placeholder:text-[17px] font-normal ",
        className
      )}
      {...props}
    />
  )
}

export { Input }
