import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "group/badge inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden border border-transparent whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        default: "bg-primary text-white font-medium text-[11.79px] lg:text-[15px] px-[12.57px] lg:px-[16px] py-[5.5px] lg:py-[7px] rounded-[18.07px] lg:rounded-[23px] [a]:hover:bg-primary/80",
        secondary:
          "bg-white text-primary font-medium text-[10.6px] lg:text-[15px] px-[11.3px] lg:px-[16px] py-[5px] lg:py-[7px] rounded-[16.25px] lg:rounded-[23px] leading-[15.14px] lg:leading-[21px] border-[0.76px] lg:border-[1px] border-primary [a]:hover:bg-primary/80",
        gray:
          "bg-gray3 text-black font-medium text-[14px] px-[12px] py-[4px] rounded-[12px] leading-[20px] [a]:hover:bg-primary/80",
        withIcon:
          "bg-gray3 text-black2 font-medium text-[10.6px] lg:text-[14px] px-[11.3px] lg:px-[16px] py-[5px] lg:py-[8px] rounded-[16.25px] lg:rounded-[12px] leading-[15.14px] lg:leading-[20px] [a]:hover:bg-primary/80",
    
          transparent:
         "bg-transparent text-white uppercase font-medium text-[10.6px] lg:text-[15px] px-[11.3px] lg:px-[16px] py-[5px] lg:py-[7px] rounded-[16.25px] lg:rounded-[23px] leading-[15.14px] lg:leading-[21px] border-[0.76px] lg:border-[1px] border-white",
    
        },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      variant,
    },
  })
}

export { Badge, badgeVariants }
