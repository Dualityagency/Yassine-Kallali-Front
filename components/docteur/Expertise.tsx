import Image from "next/image"
import { Badge } from "../ui/badge"
import { GraduationCap, Globe } from "lucide-react"
import { useTranslations } from "next-intl"

const Expertise = () => {
  const t = useTranslations("doctor.expertise")

  return (
    <div className="px-4 sm:px-8 lg:px-24 py-12 lg:py-20">
      <Badge variant="secondary" >
        {t("badge")}
      </Badge>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mt-6">

        {/* ── IMAGE COL ── */}
        <div className="lg:flex-1 order-1 lg:order-2 rounded-[15px] overflow-hidden h-[400px] sm:h-[520px] lg:h-[640px] w-[280px] sm:w-[360px] lg:w-auto mx-auto lg:mx-0">
          <div className="relative w-full h-full">
            <Image
              src="/doctor/doctor.png"
              alt={t("name")}
              fill
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* ── TEXT COL ── */}
        <div className="flex flex-col gap-5 lg:w-1/2 order-2 lg:order-1 bg-background py-4 px-4 lg:py-9 lg:px-9 rounded-[15px]">
          <h2 className="font-semibold text-primary text-[32px] lg:text-[45px] xl:text-[50px] 2xl:text-[60px] leading-[100%]">
            {t("name")}{" "}
            <span className="font-normal">{t("title")}</span>
          </h2>

          <div className="py-7 max-w-[550px]">
            <p className="paragraph1">{t("description")}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge variant="gray">
              <Globe className="w-3.5 h-3.5" />
              {t("badges.languages")}
            </Badge>
            <Badge variant="gray">
              <GraduationCap className="w-3.5 h-3.5" />
              {t("badges.trainer")}
            </Badge>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Expertise