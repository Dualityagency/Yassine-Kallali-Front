"use client"

import Image from "next/image"
import { useTranslations } from "next-intl"
import { Badge } from "../ui/badge"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { useState, useRef } from "react"
import type { EmblaCarouselType } from "embla-carousel"

const images = [
  "/doctor/cabinet1.jpg",
  "/doctor/cabinet2.jpg",
  "/doctor/cabinet3.jpg",
  "/doctor/cabinet4.jpg",
  "/doctor/cabinet5.jpg",
  "/doctor/cabinet1.jpg",
]

const Cabinet = () => {
  const t = useTranslations("doctor.cabinet")
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselApi = useRef<EmblaCarouselType | undefined>(undefined)


  return (
    <div className="pb-12 lg:pb-15">
      <div className="px-4 sm:px-6 lg:px-20">
        <div className="flex flex-col justify-center items-center gap-4 text-center mb-8">
          <Badge>{t("badge")}</Badge>
          <span className="title2">{t("title")}</span>
        </div>
      </div>

      <div className="relative w-screen left-1/2 -translate-x-1/2 aspect-[1440/745] overflow-hidden">
        <Image
          src={images[currentIndex]}
          alt={t("mainAlt")}
          fill
          className="object-cover transition-opacity duration-500"
          sizes="100vw"
          priority
        />

        {/* Vertical center line */}
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2px] bg-white z-30" />

        {/* Previews centered in the middle */}
        <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
          <div className="overflow-hidden w-full max-w-[90vw] lg:max-w-[80vw]">
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              setApi={(api) => {
                carouselApi.current = api
                if (api) {
                  api.on("select", () => {
                    setCurrentIndex(api.selectedScrollSnap())
                  })
                }
              }}
            >
              <CarouselContent className="ml-0 justify-center">
                {images.map((src, i) => (
                  <CarouselItem 
                    key={i} 
                    className="pl-0 basis-auto cursor-pointer"
                    onClick={() => {
                      if (carouselApi.current) {
                        carouselApi.current.scrollTo(i)
                      }
                    }}
                  >
                    <div className={`relative overflow-hidden w-[91px] h-[45px] lg:w-[288px] lg:h-[143px] transition-all duration-300 ${
                      i === currentIndex 
                        ? ' scale-105' 
                        : 'opacity-100'
                    }`}>
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