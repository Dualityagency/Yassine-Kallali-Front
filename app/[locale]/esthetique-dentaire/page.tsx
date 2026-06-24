import Esthetique from "@/components/esthetique-dentaire/Esthetique"
import Faq from "@/components/esthetique-dentaire/Faq"
import Harmonie from "@/components/esthetique-dentaire/Harmonie"
import Naturel from "@/components/esthetique-dentaire/Naturel"
import PrendreContact from "@/components/esthetique-dentaire/PrendreContact"
import QA from "@/components/layout/QA";
import { useTranslations } from "next-intl";

const page = () => {
   const t= useTranslations("implant-immediat")
    const qaList= t.raw("qa.qaList")
  return (
    <>
        

<Naturel/>
<Harmonie/>
<Esthetique/>
  <QA 
            badge={t('qa.badge')} 
            title={t('qa.title')} 
            qaList={qaList}
            />
<PrendreContact/>

    </>
  )
}

export default page