import Image from "next/image";
import CtaButton from "../ui/CtaButton";
import { Badge } from "../ui/badge";
import { useTranslations } from "next-intl";

const Naturel = () => {
  const t = useTranslations("esthetique.naturel");

  return (
    <div className="pb-12 lg:pb-15 px-4 lg:px-24">
      <div>
        <Badge variant={"secondary"}>{t("badge")}</Badge>
      </div>

      <div className="flex flex-col md:flex-row md:items-stretch gap-6 md:gap-12">

        {/* ── LEFT COL ── */}
        <div className="flex flex-col gap-6 md:gap-0 md:justify-between md:w-1/2 md:h-[675px]">

          <div className="py-6">
            <h1 className="title1">{t("title")}</h1>
          </div>

          {/* Hero image — mobile only */}
          <div className="relative rounded-[15px] overflow-hidden md:hidden mx-auto w-full max-w-[339px] h-[280px]">
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
            <div className="relative rounded-[10px] md:rounded-[15px] overflow-hidden bg-[#dbeafe] w-[30%] h-[127px] md:h-[193px] flex-shrink-0">
              <Image
                src="/esthetique/naturel.png"
                alt={t("productAlt")}
                fill
                className="object-cover"
              />
            </div>

            <div className="w-fit bg-primary rounded-[10px] md:rounded-[15px] p-4 md:p-5 flex flex-col justify-center">
              <p className="font-semibold text-white text-[13.26px] md:text-[20px] leading-[100%] uppercase">
                {t("cardSmall.title")}
              </p>
              <p className="font-normal text-white text-[10.61px] md:text-[16px] leading-[100%]">
                {t("cardSmall.text")}
              </p>
            </div>
          </div>

          {/* Bottom card */}
          <div className="bg-background rounded-xl p-6">
            <p className="font-semibold text-primary text-[18px] md:text-[20px] leading-[100%]">
              {t("cardBottom.title")}
            </p>
            <p className="font-normal text-primary text-[15px] md:text-[16px] leading-[100%] py-4">
              {t("cardBottom.text")}
            </p>
            <CtaButton variant="blue">
              {t("cardBottom.cta")}
            </CtaButton>
          </div>

        </div>

        {/* ── RIGHT COL — hero image desktop only ── */}
        <div className="relative hidden md:block md:flex-1 rounded-[15px] overflow-hidden md:h-[675px]">
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