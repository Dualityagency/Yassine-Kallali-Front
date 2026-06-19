import { Badge } from "../ui/badge";
import QACard from "./QACard";


interface QAProps {
    badge:string,
    title:string,
    qaList:{q:string,a:string}[]
}

export default function QA({badge,title,qaList}:QAProps) {



    return(
        <div className="bg-background px-6  py-12 lg:py-16.75 flex flex-col items-center gap-y-6 lg:gap-y-16.25">
            
            {/*Badge & Title */}
            <div className="flex flex-col items-center gap-y-6 lg:gap-y-9.5">
                <Badge>{badge}</Badge>
                <h2 className="title2 w-[70%] mx-auto text-center">
                    {title}
                </h2>
            </div>


            <div className="flex flex-col gap-y-3.25 lg:gap-y-4 w-full lg:w-[55%]">
                    {
                        qaList?.map((el,index)=>(
                            <QACard q={el.q} a={el.a} key={index}/>
                            
                        ))
                    }
            </div>


        </div>
    )
}