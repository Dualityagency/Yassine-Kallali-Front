import { Badge } from "../ui/badge"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { useTranslations } from "next-intl"

const images = [
  "/esthetique/esthetique1.png",
  "/esthetique/esthetique2.png",
  "/esthetique/esthetique3.png",
]

const Esthetique = () => {
  const t = useTranslations("esthetique.esthetiqueSection")

  return (
    <div className="w-full px-4 sm:px-6 lg:px-20 py-11 lg:py-19">

      {/* Section 1 - Badge + Title + Text */}
      <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-12">
        <div className="shrink-0">
          <Badge className="w-fit">{t("badge")}</Badge>
        </div>

        <div className="flex flex-col gap-4 lg:gap-6 lg:max-w-[850px]">
          <span className="title2">{t("title")}</span>
          <span className="paragraph1">
            {t("description1")}
            <br /><br />
            {t("description2")}
          </span>
        </div>
      </div>

      {/* Section 2 - Text + Carousel */}
      <div className="mt-12 lg:mt-16 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8">

        {/* Text */}
        <div className="flex flex-col gap-1">
          <span className="text-sm lg:text-[14px] font-semibold text-primary leading-tight">
            {t("rehab.title")}
          </span>
          <span className="paragraph1">{t("rehab.text")}</span>
          <span className="text-sm lg:text-[14px] font-semibold text-primary leading-tight mt-3">
            {t("materiaux.title")}
          </span>
          <span className="paragraph1">{t("materiaux.text")}</span>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{ align: "center", loop: false }}
          className="w-full lg:max-w-[800px]"
        >
          <CarouselContent className="flex gap-4">
            {images.map((src, index) => (
              <CarouselItem key={index} className="basis-auto">
                <div className="relative w-[191.72px] h-[193px] lg:w-[300px] lg:h-[302px] rounded-[9.59px] lg:rounded-[15px] overflow-hidden shrink-0">
                  <Image
                    src={src}
                    alt={`${t("title")} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

      </div>
    </div>
  )
}

export default Esthetique