import { useTranslations } from "next-intl"
import { Badge } from "../ui/badge"
import CtaButton from "../ui/CtaButton"

const Contact = () => {
  const t = useTranslations("doctor.contact")

  return (
    <div className="bg-background px-4 sm:px-6 py-11 lg:py-19 lg:px-20">
      <div className="flex flex-col justify-center items-center gap-4 text-center mb-8">
        <Badge>{t("badge")}</Badge>
        <span className="title1">{t("title")}</span>
        <span className="paragraph1">{t("description")}</span>
        <CtaButton variant="blue" textWhenHover="blue">{t("cta")}</CtaButton>
      </div>
    </div>
  )
}

export default Contact