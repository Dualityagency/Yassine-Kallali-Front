import { useTranslations } from "next-intl"
import { Badge } from "../ui/badge"


export default function Header(){

    const t = useTranslations('contact')

    return(
        <div className="flex flex-col gap-y-5 lg:gap-y-6.75">
            <Badge>{t('badge')}</Badge>

            <div className="flex flex-col lg:flex-row justify-between gap-y-4.75">
                <h1 className="w-full lg:w-[47%] title1 ">{t('title-PartOne')} 
                    <span className="font-bold">{t('title-PartTwo')}</span></h1>
                <p className="w-full lg:w-[33%] paragraph1">{t('description')}</p>
            </div>
        </div>
    )
}