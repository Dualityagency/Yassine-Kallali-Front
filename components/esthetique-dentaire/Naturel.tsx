import Image from "next/image";
import CtaButton from "../ui/CtaButton";
import { Badge } from "../ui/badge";
import { useTranslations } from "next-intl";

const Naturel = () => {
  const t = useTranslations("esthetique.naturel");

  return (
    <div className="pb-12 lg:pb-15 px-4 lg:px-24">
      <Badge>{t("badge")}</Badge>

      <div className="flex flex-col lg:flex-row lg:items-stretch gap-6 lg:gap-12">

        {/* ── LEFT COL ── */}
        <div className="flex flex-col gap-6 lg:w-1/2">

          {/* Title */}
          <h1 className="text-3xl lg:text-5xl font-extrabold text-[#0f2a5e] leading-tight">
            {t("title")}
          </h1>

          {/* Hero image — mobile only, sits under title */}
          <div className="relative rounded-[15px] overflow-hidden w-[339px] h-[280px] lg:hidden">
            <Image
              src="/esthetique/naturel1.png"
              alt={t("heroAlt")}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Small image + dark card row */}
          <div className="flex flex-row gap-4 items-stretch w-full">
            <div className="relative rounded-[10px] lg:rounded-[15px] overflow-hidden bg-[#dbeafe] w-[30%] h-[127px] lg:h-[193px]">
              <Image
                src="/esthetique/naturel.png"
                alt={t("productAlt")}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-1 bg-[#0f2a5e] rounded-[10px] lg:rounded-[15px] p-4 lg:p-5 flex flex-col justify-center min-w-0">
              <p className="text-[13px] lg:text-xs font-bold text-white uppercase tracking-wider mb-2">
                {t("cardSmall.title")}
              </p>
              <p className="text-[10px] lg:text-sm text-slate-300 leading-relaxed">
                {t("cardSmall.text")}
              </p>
            </div>
          </div>

          {/* Bottom card */}
          <div className="bg-background rounded-xl p-6">
            <p className="font-semibold text-primary text-[18px] lg:text-[20px] leading-[100%]">
              {t("cardBottom.title")}
            </p>
            <p className="font-normal text-primary text-[15px] lg:text-[16px] leading-[100%] py-4">
              {t("cardBottom.text")}
            </p>
            <CtaButton variant="blue" textWhenHover="blue">
              {t("cardBottom.cta")}
            </CtaButton>
          </div>
        </div>

        {/* ── RIGHT COL — hero image desktop only ── */}
        <div className="relative hidden lg:block lg:flex-1 rounded-[15px] overflow-hidden lg:h-[675px]">
          <Image
            src="/esthetique/naturel1.png"
            alt={t("heroAlt")}
            fill
            className="object-cover"
            priority
          />
        </div>

      </div>
    </div>
  );
};

export default Naturel;