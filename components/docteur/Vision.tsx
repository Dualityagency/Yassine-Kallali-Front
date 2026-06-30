import Image from "next/image"
import { useTranslations } from "next-intl"
import { Badge } from "../ui/badge"

const Vision = () => {
  const t = useTranslations("doctor.vision")

  return (
    <section className="pb-12 lg:pb-20 px-6 lg:px-20 overflow-hidden">
      <div className="flex justify-center pb-8  lg:pb-20">
        <Badge>{t("badge")}</Badge>
      </div>

      {/* ── DESKTOP ── */}
      <div className="hidden lg:block relative">
        {/* Quote - absolute positioned between columns */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/1 z-10 w-full pointer-events-none">
          <div className="flex justify-center">
            <p className="italic font-medium text-[60px] leading-[120%] tracking-normal text-primary max-w-[1000px] ">
              {t("quote")}
            </p>
          </div>
        </div>

        {/* 2 columns */}
        <div className="flex gap-8 relative">
          {/* LEFT COL */}
          <div className="flex flex-col flex-1">
            <div className="flex justify-start">
              <Image
                src="/doctor/vision1.png"
                alt={t("img1Alt")}
                width={244}
                height={265}
                className="w-[244px] h-[265px] object-cover rounded-[15px]"
              />
            </div>

            <div className="flex justify-center mt-4">
              <p className="text-sm font-semibold text-[#1a2e4a] tracking-wide">
                {t("name")}
              </p>
            </div>

            <div className="mt-5 flex flex-col gap-5">
              <p className="font-semibold text-gray text-[20px] leading-[100%]">
                {t("tagline")}
              </p>

              <div className="flex gap-10">
                <div>
                  <p className="text-[45px] font-bold text-[#1a2e4a]">{t("stats.satisfaction.value")}</p>
                  <p className="text-[17px] font-medium uppercase tracking-widest text-gray">{t("stats.satisfaction.label")}</p>
                </div>
                <div>
                  <p className="text-[45px] font-bold text-[#1a2e4a]">{t("stats.smiles.value")}</p>
                  <p className="text-[17px] font-medium uppercase tracking-widest text-gray">{t("stats.smiles.label")}</p>
                </div>
                <div>
                  <p className="text-[45px] font-bold text-[#1a2e4a]">{t("stats.google.value")}</p>
                  <p className="text-[17px] font-medium uppercase tracking-widest text-gray">{t("stats.google.label")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COL */}
          <div className="flex items-end">
            <Image
              src="/doctor/vision2.png"
              alt={t("img2Alt")}
              width={371}
              height={307}
              className="w-[371px] h-[307px] object-cover rounded-[15px]"
            />
          </div>
        </div>
      </div>

      {/* ── MOBILE ── */}
      <div className="flex flex-col gap-6 mt-8 lg:hidden">
        <p className="italic text-[32px] leading-[100%] tracking-normal font-medium text-[#1a2e4a]">
          {t("quote")}
        </p>

        <p className="text-sm font-semibold text-[#1a2e4a] tracking-wide">
          {t("name")}
        </p>

        <p className="text-sm text-gray-500">
          {t("tagline")}
        </p>

        <div className="flex gap-8">
          <div>
            <p className="text-2xl font-bold text-primary">{t("stats.satisfaction.value")}</p>
            <p className="text-xs uppercase tracking-widest text-[#383838]">{t("stats.satisfaction.label")}</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-primary">{t("stats.smiles.value")}</p>
            <p className="text-xs uppercase tracking-widest text-[#383838]">{t("stats.smiles.label")}</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-primary">{t("stats.google.value")}</p>
            <p className="text-xs uppercase tracking-widest text-[#383838] ">{t("stats.google.label")}</p>
          </div>
        </div>

        <div className="flex gap-4">
          <Image
            src="/doctor/vision1.png"
            alt={t("img1Alt")}
            width={143}
            height={155}
            className="w-[143px] h-[155px] object-cover rounded-[15px]"
          />
          <Image
            src="/doctor/vision2.png"
            alt={t("img2Alt")}
            width={187}
            height={155}
            className="w-[187px] h-[155px] object-cover rounded-[15px]"
          />
        </div>
      </div>
    </section>
  )
}

export default Vision