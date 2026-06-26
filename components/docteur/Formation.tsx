import Image from "next/image";
import { useTranslations } from "next-intl";
import { Badge } from "../ui/badge";
import CtaButton from "../ui/CtaButton";

const Formation = () => {
  const t = useTranslations("doctor.formation");

  return (
    <div className="pb-12 lg:pb-15">
      <div className="bg-background px-4 sm:px-6 py-11 lg:py-19 lg:px-20">

        {/* Header */}
        <div className="flex flex-col gap-4">
          <div className="pb-4 lg:pb-8">
            <Badge>{t("badge")}</Badge>
          </div>
          <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-8">
            <span className="title2">{t("title")}</span>
            <span className="paragraph1">{t("description")}</span>
          </div>
        </div>

        {/* Grid Section */}
        <div className="mt-10 lg:mt-14 flex flex-col items-center xl:flex-row xl:items-start xl:justify-between gap-4 xl:gap-0">

          {/* Col 1 — big image */}
          <div className="flex-shrink-0">
            <Image
              src="/doctor/vid.png"
              alt={t("img1Alt")}
              width={413}
              height={491}
              className="w-[339px] h-[299px] xl:w-[413px] xl:h-[491px] object-cover rounded-[12.31px] xl:rounded-[15px]"
            />
          </div>

          {/* Col 2 — testimonial card + primary card */}
          <div className="flex flex-col gap-4 flex-shrink-0">

            {/* Testimonial card */}
            <div className="w-[339px] h-[301px] xl:w-[495px] xl:h-[262px] border border-border rounded-[15px] p-6 flex flex-col justify-between">
              <Image
                src="/doctor/quote.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6 object-contain"
              />
              <p className="paragraph1 mt-2 text-sm">{t("testimonial.text")}</p>
              <p className="mt-4 font-semibold text-sm">{t("testimonial.author")}</p>
            </div>

            {/* Primary bg card */}
            <div className="w-[339px] h-[209px] xl:w-[434px] xl:h-[209px] bg-primary rounded-[15px] p-6 flex flex-col justify-between">
              <div className="flex items-center gap-2 border border-white w-fit p-2 rounded-[20px] " >
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-primary-foreground/20 border-2 border-primary"
                    />
                  ))}
                </div>
                <span className="text-primary-foreground font-semibold text-sm">{t("primaryCard.practitioners")}</span>
              </div>
              <p className="text-primary-foreground/90 text-sm mt-4 leading-relaxed">
                {t("primaryCard.text")}
              </p>
            </div>
          </div>

          {/* Col 3 — aligner image + info card with CTA */}
          <div className="flex flex-col gap-4 flex-shrink-0">

            {/* Aligner image */}
            <Image
              src="/doctor/formation1.png"
              alt={t("img2Alt")}
              width={331}
              height={262}
              className="w-[339px] h-[226px] xl:w-[331px] xl:h-[262px] object-cover rounded-[8.02px] xl:rounded-[15px]"
            />

            {/* Info card */}
            <div className="w-[339px] h-[190px] xl:w-[396px] xl:h-[209px] border border-border rounded-[15px] p-6 flex flex-col justify-between">
              <p className="paragraph1 text-sm leading-relaxed">{t("infoCard.text")}</p>
              <CtaButton className="w-fit" variant="blue">
                {t("infoCard.cta")}
              </CtaButton>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Formation;