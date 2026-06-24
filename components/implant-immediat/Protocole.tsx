import { useTranslations } from "next-intl";
import { Badge } from "../ui/badge";
import React from "react";
import { cn } from "@/lib/utils";


interface ProtocolItem {
  title: string;
  description: string;
}

const Card = ({index,title,description}:{index:number,title:string;description:string}) =>{
    return(
        <div className={cn("min-w-61.5 lg:w-[20%] h-73.75 lg:h-92.5 border-border border-[0.8px] lg:border rounded-[16px] lg:rounded-[20px] px-7.5 lg:pl-9.25 lg:pr-8.5 py-6.5 lg:py-8.25",index == 0 && "mt-5.5",index==1 && "mt-16.75",index==3 && "mt-21.75")}>
            <h4 className="title3 text-xl lg:text-[25px] mb-13 lg:mb-16">/0{index+1}</h4>
            <div className="flex items-center mb-11.25 lg:mb-11.75">
         {[0, 1, 2, 3].map((el, idx) => (
    <React.Fragment key={idx}>
      {el === index ? (
        // Active step - shows "+" with filled circle
        <div className="min-w-[18.8px] lg:w-5 min-h-[18.8px] lg:h-5 bg-border rounded-full flex justify-center items-center text-primary text-[14px]">
          +
        </div>
      ) : (
        // Inactive step - shows empty circle
        <div className="min-w-[18.8px] lg:w-5 min-h-[18.8px] lg:h-5 border-[#CED1D4] border-[0.8px] lg:border rounded-full">
        </div>
      )}
      {/* Add HR only if it's not the last item */}
      {idx < 3 && <hr className="w-1/4 h-px bg-[#CED1D4]" />}
    </React.Fragment>
        ))}
</div>
            <h3 className="title3 mb-3.5 lg:mb-4.75">{title}</h3>
            <p className="paragraph2">{description}</p>
        </div>
    )
}

export default function Protocole(){

    const t = useTranslations('implant-immediat')
    const list=t.raw('protocole.list')as ProtocolItem[]
    
    return(
        <div className="bg-background px-6 lg:pl-20 lg:pr-16 py-12 lg:py-16.75 flex flex-col">
            <Badge className="mb-6 lg:mb-9.5">{t('protocole.badge')}</Badge>
            <div className="flex flex-col lg:flex-row  justify-between gap-y-4.75 mb-8 lg:mb-14.25">
                <h2 className="title2">{t('protocole.title')}</h2>
                <p className="paragraph1 ">{t('protocole.description')}</p>
            </div>

            <div className="flex justify-between gap-x-4 overflow-x-scroll lg:overflow-x-hidden">
                {
                    list.map((el,index)=>{
                        return(
                        <Card  index={index} title={el.title} description={el.description} key={index}/>
                        )
                    })
                }
            </div>
        </div>
    )
}