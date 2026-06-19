
"use client"
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils'; 

export default function QACard({q,a}:{q:string,a:string}){
  const [isOpen, setIsOpen] = useState(false);


    return(
        <div className="w-full bg-white px-6 lg:px-5 pb-4 lg:pb-4 pt-5.25 lg:pt-4 border-[0.87px] lg:border border-[#D9D9D9]
         rounded-[14px] lg:rounded-[16px]
         flex flex-col
         ">
           <div className='flex justify-between'>
             <h3 className='title4 w-[90%]'>{q}</h3>
            <ChevronDown 
          className={cn(
            "transition-transform duration-300 ease-in-out cursor-pointer ",
            isOpen ? "rotate-180" : ""
          )}
          size={20}
           onClick={() => setIsOpen(!isOpen)}
        />           </div>
        {/* Animated content */}
        <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out ",
          isOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
        )}
      >
        <p className="paragraph2 text-[#6B7280]! leading-[110%]! lg:leading-6!">{a}</p>
      </div>
        </div>
    )
}