import Image from "next/image"
import CtaButton from "../ui/CtaButton"
import { Badge } from "../ui/badge"
import { useTranslations } from "next-intl"

const Prendre = () => {
  const t = useTranslations("home.prendre")

  return (
    <div className="relative w-full h-[410px] lg:h-[454px] overflow-hidden">
      <Image
        src="/home/Prendre.png"
        alt={t("title")}
        fill
        priority
        className="object-cover"
      />

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 gap-4">
        <Badge variant="transparent">{t("badge")}</Badge>

        <h2 className="font-semibold text-white text-[17.92px] lg:text-[22.41px] leading-[100%]">
          {t("title")}
        </h2>

        <p className="text-[15px] lg:text-[17px] text-white max-w-[550px]">
          {t("description")}
        </p>

        <CtaButton className="mt-2">{t("cta")}</CtaButton>
      </div>
    </div>
  )
}

export default Prendre