import Innovation from "@/components/implant-immediat/Innovation";
import PrendreContact from "@/components/implant-immediat/PrendreContact";
import Protocole from "@/components/implant-immediat/Protocole";
import TechnologieDeCharge from "@/components/implant-immediat/TechnologieDeCharge";
import QA from "@/components/layout/QA";
import { useTranslations } from "next-intl";


export default function ImplantImmediat() {
    const t= useTranslations("implant-immediat")
    const qaList= t.raw("qa.qaList")
    
    return (
        <div className="flex flex-col gap-y-12 lg:gap-y-18.25 mt-12 lg:mt-20">
            <TechnologieDeCharge />
            <Innovation />
            <Protocole/>
            <QA 
            badge={t('qa.badge')} 
            title={t('qa.title')} 
            qaList={qaList}
            />
            <PrendreContact/>
        </div>
    )
}