"use client"

import Image from "next/image"
import { useTranslations } from "next-intl"
import { Badge } from "../ui/badge"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

const images = [
  "/doctor/cabinet1.png",
  "/doctor/cabinet2.png",
  "/doctor/cabinet3.png",
  "/doctor/cabinet4.png",
  "/doctor/cabinet5.png",
  "/doctor/cabinet6.png",
]

const Cabinet = () => {
  const t = useTranslations("doctor.cabinet")

  return (
    <div className="pb-12 lg:pb-15">
      <div className="px-4 sm:px-6 lg:px-20">
        <div className="flex flex-col justify-center items-center gap-4 text-center mb-8">
          <Badge>{t("badge")}</Badge>
          <span className="title2">{t("title")}</span>
        </div>
      </div>

      {/* Main image — full width, escapes the section's horizontal padding */}
      <div className="relative w-screen left-1/2 -translate-x-1/2 aspect-[1440/745] overflow-hidden">
        <Image
          src={images[0]}
          alt={t("mainAlt")}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />

        {/* Vertical center line */}
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2px] bg-white/60 z-10" />

        {/* Previews centered in the middle */}
        <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
          <div className="overflow-hidden">
            <Carousel opts={{ align: "center", loop: true }}>
              <CarouselContent className="ml-0">
                {images.map((src, i) => (
                  <CarouselItem key={i} className="pl-0 basis-auto">
                    <div className="relative overflow-hidden w-[91px] h-[45px] lg:w-[288px] lg:h-[143px]">
                      <Image
                        src={src}
                        alt={`${t("previewAlt")} ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 91px, 288px"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cabinet