import Image from "next/image"
import { Badge } from "../ui/badge"
import CtaButton from "../ui/CtaButton"
import { useTranslations } from "next-intl"

const Autorise = () => {
  const t = useTranslations("home.autorise")

  return (
    <div className="px-6 lg:px-20 pb-18">

      {/* Badge + titre */}
      <div className="flex flex-col gap-4 items-center lg:flex-row lg:justify-between lg:items-start pb-6 lg:pb-12">
        <Badge>{t("badge")}</Badge>
        <span className="title2 text-center lg:text-left lg:max-w-[600px]">
          {t("title")}
        </span>
      </div>

      {/* Image + carte */}
      <div className="flex flex-col items-center lg:flex-row lg:items-stretch lg:gap-6">

        {/* Image */}
        <div className="flex justify-center lg:justify-start flex-shrink-0 lg:w-[45%] xl:w-[55%]">
          <Image
            src="/home/autorise.png"
            alt={t("doctor.name")}
            width={793}
            height={525}
            className="w-full max-w-[339px] lg:max-w-none h-auto rounded-[15px] object-cover"
          />
        </div>

        {/* Carte */}
        <div className="
          flex flex-col justify-between gap-6 rounded-[15px] bg-background p-6
          w-full max-w-[339px] h-auto -mt-6
          lg:w-auto lg:h-auto lg:mt-0 lg:p-10 lg:flex-1 lg:max-w-none
        ">

          {/* Top: name + title */}
          <div className="flex flex-col gap-1">
            <h3 className="text-[18px] lg:text-[24px] font-bold leading-tight text-primary">
              {t("doctor.name")}
            </h3>
            <span className="text-[12px] lg:text-[16px] font-medium uppercase tracking-widest text-[#383838]">
              {t("doctor.experience")}
            </span>
          </div>

          {/* Bottom: paragraph + CTA */}
          <div className="flex flex-col gap-4">
            <p className="paragraph2">
              {t("doctor.description")}
            </p>
            <CtaButton variant="blue" textWhenHover="blue" className="w-fit">
              {t("doctor.cta")}
            </CtaButton>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Autorise