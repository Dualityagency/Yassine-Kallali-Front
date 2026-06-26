import { Badge } from "../ui/badge"
import Image from "next/image"
import CtaButton from "../ui/CtaButton"
import { useTranslations } from "next-intl"

const PrendreContact = () => {
  const t = useTranslations("esthetique.prendreContact")

  return (
    <div className="flex flex-col gap-6 px-4 sm:px-6 lg:px-20 pt-12 lg:pt-15">
      <Badge className="w-fit">{t("badge")}</Badge>

      <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-center lg:justify-between w-full">

        <Image
          src="/esthetique/contact.png"
          alt={t("title")}
          width={542}
          height={543}
          className="rounded-[9.33px] lg:rounded-[15px] w-full max-w-[339px] h-auto lg:w-[542px] lg:h-[543px] lg:max-w-none object-cover shrink-0"
        />

        <div className="bg-background rounded-[15px] p-6 lg:p-10 flex flex-col gap-6 lg:gap-8 w-full max-w-[339px] h-auto lg:w-auto lg:h-[543px] lg:max-w-none lg:flex-1">
          <span className="font-semibold text-primary text-[32px] lg:text-[50px] xl:text-[60px] leading-[100%]">{t("title")}</span>
          <span className="paragraph2">{t("description")}</span>
          <span className="font-medium text-black text-[13px] lg:text-[16px] leading-[100%]">
            {t("subtitle")}
          </span>
          <div>
            <CtaButton className="w-fit" textWhenHover="blue">{t("cta")}</CtaButton>
          </div>
        </div>

      </div>
    </div>
  )
}

export default PrendreContact