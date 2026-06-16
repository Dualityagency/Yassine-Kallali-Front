import Image from "next/image";
import { Badge } from "../ui/badge";
import { useTranslations } from "next-intl";




export default function Innovation() {
    const t = useTranslations("implant-immediat")

    return(
        <div className="container-x flex flex-col gap-y-3.25 lg:gap-y-13.25">
            <div className="flex flex-col items-center gap-y-6 lg:gap-y-9.5">
                <Badge>{t("inovation.badge ")}</Badge>
                <h2 className="title2 w-[70%] mx-auto text-center">
                    {t("inovation.title")}
                </h2>
            </div>

            <div className="flex flex-col lg:flex-row ">

                <div className="w-full lg:w-[51%] rounded-[15px] bg-background px-5.5 py-8.25">
                    <Image src={"/icons/nib.png"} width={56} height={56} alt=""/>
                    <h2 className="title3">{t("inovation.questionTwo")}</h2>
                    <p className="paragraph">{t("inovation.questionTwo")}</p>
                    <div className="flex gap-x-2">
                        
                    </div>
                </div>

                <div className="w-full lg:w-[36%] ">

                </div>
            </div>
        </div>
    )
}