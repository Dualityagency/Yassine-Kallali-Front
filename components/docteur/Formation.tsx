import Image from "next/image";
import { useTranslations } from "next-intl";
import { Badge } from "../ui/badge";
import CtaButton from "../ui/CtaButton";
import Link from "next/link";

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
        <div className="mt-10 lg:mt-14 grid grid-cols-1 xl:grid-cols-3 gap-4 xl:gap-6 items-start">

          {/* Col 1 — big image */}
          <div className="w-[339px] xl:w-full mx-auto xl:mx-0">
            <Image
              src="/doctor/vid.png"
              alt={t("img1Alt")}
              width={413}
              height={491}
              className="w-full h-[299px] xl:h-[491px] object-cover rounded-[12.31px] xl:rounded-[15px]"
            />
          </div>

          {/* Col 2 — testimonial card + primary card */}
          <div className="flex flex-col gap-4 w-[339px] xl:w-full mx-auto xl:mx-0">

            {/* Testimonial card */}
            <div className="w-full min-h-[262px] border border-border rounded-[15px] p-6 xl:p-8 flex flex-col justify-between gap-4">
              <Image
                src="/doctor/quote.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6 object-contain flex-shrink-0"
              />
              <p className="paragraph1 text-sm flex-1">{t("testimonial.text")}</p>
              <p className="font-semibold text-sm">{t("testimonial.author")}</p>
            </div>

            {/* Primary bg card */}
            <div className="w-full min-h-[209px] bg-primary rounded-[15px] p-6 xl:p-8 flex flex-col justify-between gap-4">
              <div className="flex items-center gap-2 border border-white w-fit px-3 py-2 rounded-[20px]">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-primary-foreground/20 border-2 border-primary"
                    />
                  ))}
                </div>
                <span className="text-primary-foreground font-semibold text-sm whitespace-nowrap">
                  {t("primaryCard.practitioners")}
                </span>
              </div>
              <p className="text-primary-foreground/90 text-sm leading-relaxed">
                {t("primaryCard.text")}
              </p>
            </div>
          </div>

          {/* Col 3 — aligner image + info card with CTA */}
          <div className="flex flex-col gap-4 w-[339px] xl:w-full mx-auto xl:mx-0">

            {/* Aligner image */}
            <Image
              src="/doctor/formation1.png"
              alt={t("img2Alt")}
              width={331}
              height={262}
              className="w-full h-[226px] xl:h-[262px] object-cover rounded-[8.02px] xl:rounded-[15px]"
            />

            {/* Info card */}
            <div className="w-full min-h-[209px] border border-border rounded-[15px] p-6 xl:p-8 flex flex-col justify-between gap-6">
              <p className="paragraph1 text-sm leading-relaxed">
                {t("infoCard.text")}
              </p>

              <Link href="/contact">
                <CtaButton
                  className="w-fit"
                  variant="blue"
                  textWhenHover="blue"
                >
                  {t("infoCard.cta")}
                </CtaButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formation;
