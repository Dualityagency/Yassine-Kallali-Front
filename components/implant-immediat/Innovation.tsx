import Image from "next/image";
import { Badge } from "../ui/badge";
import { useTranslations } from "next-intl";




export default function Innovation() {
    const t = useTranslations("implant-immediat")

    return(
        <div className="container-x flex flex-col gap-y-3.25 lg:gap-y-13.25">
            <div className="flex flex-col items-center gap-y-6 lg:gap-y-9.5">
                <Badge>{t("inovation.badge")}</Badge>
                <h2 className="title2 w-[70%] mx-auto text-center">
                    {t("inovation.title")}
                </h2>
            </div>

            <div className="flex flex-col lg:flex-row gap-y-6.5 justify-between">

                <div className="w-full lg:w-[57%] rounded-[15px] bg-background px-5.5 py-8.25">
                    <Image src={"/icons/nib.png"} width={56} height={56} className="mb-6" alt="nib icon"/>
                    <h2 className="title3 mb-8.75 lg:mb-5.5">{t("inovation.questionOne")}</h2>
                    <p className="paragraph mb-8 lg:mb-3.5">{t("inovation.answerOne")}</p>
                    <div className="flex gap-x-2">
                        <Badge variant={"gray"}>{t("inovation.answerOneBadge1")}</Badge>
                        <Badge variant={"gray"}>{t("inovation.answerOneBadge2")}</Badge>
                    </div>
                </div>

                <div className="w-full lg:w-[41%]  rounded-[15px] bg-primary px-5.5 py-8.25">
                    <Image src={"/icons/!.png"} width={56} height={56} className="mb-6" alt="nib icon"/>
                    <h2 className="title3 text-white! mb-8.75 lg:mb-5.5">{t("inovation.questionTwo")}</h2>
                    <p className="paragraph text-white! mb-8 lg:mb-3.5">{t("inovation.answerTwo")}</p>
                </div>
            </div>
        </div>
    )
}