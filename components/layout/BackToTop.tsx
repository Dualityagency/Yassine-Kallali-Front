"use client";
import Image from "next/image";


export default function BackToTop() {
    return(
         <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-fit border-primary border-[0.78px] lg:border-[1.16px] rounded-[5.81px] pl-[9.41px] lg:pl-[13.95px] pr-[10.91px] lg:pr-[15.11px] pt-[8.62px] lg:pt-[12.78px] pb-[9.41px] lg:pb-[13.95px] cursor-pointer"
        >
            <Image src="/icons/flesh.png" width={30} height={30} className="w-2.75 lg:w-[16.27px] h-fit" alt="Flesh Icon"/>     
        </button>
    )
}