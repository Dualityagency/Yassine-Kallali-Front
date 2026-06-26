import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content h-full w-full rounded-[9.86px] border-[1.23px] border-border bg-white px-4 py-2.5 lg:py-3 text-[#6B7280] text-[17px] placeholder:text-[17px] font-normal",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
