import { Badge } from "../ui/badge"
import { ArrowRight } from "lucide-react"
import { useTranslations } from "next-intl"

const marcheKeys = ["france", "belgique", "suisse", "italie", "uk", "canada", "diaspora"]

const Marches = () => {
  const t = useTranslations("home.marches")

  return (
    <div className="pb-12 lg:pb-15">
      <div className="bg-background px-6 py-11 lg:py-19 lg:px-20">

        <div className="flex flex-col justify-center items-center gap-4 text-center">
          <div className="pb-8">
            <Badge>{t("badge")}</Badge>
          </div>

          <h2 className="title2">{t("title")}</h2>
        </div>

        <div className="pt-7 lg:pt-13">
          {marcheKeys.map((key, i) => (
            <div
              key={key}
              className="flex gap-4 lg:gap-20 py-5 border-b border-[#DBDBDB]"
            >
              {/* number */}
              <span className="text-[13px] lg:text-[37px] font-medium text-primary shrink-0">
                /{String(i + 1).padStart(2, "0")}
              </span>

              {/* city + text */}
              <div className="flex-1 flex flex-col lg:contents">
                <span className="text-[16px] lg:text-[36.78px] font-medium text-primary break-words lg:w-[280px] xl:w-[480px] lg:shrink-0">
                  {t(`items.${key}.city`)}
                </span>
                <span className="text-[13px] lg:text-[18px] text-gray2 lg:ml-auto lg:max-w-[400px]">
                  {t(`items.${key}.text`)}
                </span>
              </div>

              {/* arrow */}
              <ArrowRight className="shrink-0 text-primary w-5 h-5 lg:ml-6" />
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Marches