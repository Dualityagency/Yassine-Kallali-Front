"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { ChevronLeft, ChevronRight } from "lucide-react"

const Technologie = () => {
  const t = useTranslations("doctor.technologie")
  const [activeIndex, setActiveIndex] = useState(0)
  const [desktopApi, setDesktopApi] = useState<CarouselApi>()
  const [mobileApi, setMobileApi] = useState<CarouselApi>()

  const equipments = [
    { image: "/doctor/tech1.png", title: t("equipments.0.title"), description: t("equipments.0.description") },
    { image: "/doctor/tech2.png", title: t("equipments.1.title"), description: t("equipments.1.description") },
    { image: "/doctor/tech3.png", title: t("equipments.2.title"), description: t("equipments.2.description") },
    { image: "/doctor/tech4.png", title: t("equipments.3.title"), description: t("equipments.3.description") },
    { image: "/doctor/tech5.png", title: t("equipments.4.title"), description: t("equipments.4.description") },
  ]

  const active = equipments[activeIndex]

  const goTo = (i: number) => {
    setActiveIndex(i)
    desktopApi?.scrollTo(i)
    mobileApi?.scrollTo(i)
  }

  const handlePrev = () =>
    goTo((activeIndex - 1 + equipments.length) % equipments.length)

  const handleNext = () =>
    goTo((activeIndex + 1) % equipments.length)

  // Keep carousels in sync if the user swipes them directly
  useEffect(() => {
    if (!desktopApi) return
    const onSelect = () => setActiveIndex(desktopApi.selectedScrollSnap())
    desktopApi.on("select", onSelect)
    return () => {
      desktopApi.off("select", onSelect)
    }
  }, [desktopApi])

  useEffect(() => {
    if (!mobileApi) return
    const onSelect = () => setActiveIndex(mobileApi.selectedScrollSnap())
    mobileApi.on("select", onSelect)
    return () => {
      mobileApi.off("select", onSelect)
    }
  }, [mobileApi])

  return (
    <div className="pb-12 lg:pb-15">
      <div className="bg-background px-4 sm:px-6 py-11 lg:py-19 lg:px-20">
        <div className="flex flex-col justify-center items-center gap-4 text-center">
          <Badge>{t("badge")}</Badge>
          <span className="title2">{t("title")}</span>
        </div>

        <div className="mt-10 lg:mt-14 flex flex-col xl:flex-row gap-6 xl:gap-10">

          {/* Main image */}
          <div className="relative w-full max-w-[340px] aspect-[340/329] xl:w-[559px] xl:max-w-none xl:h-[541px] xl:aspect-auto rounded-[15px] overflow-hidden shrink-0">
            <Image
              src={active.image}
              alt={active.title}
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 340px, 559px"
              priority
            />
          </div>

          {/* Right side — bordered card */}
          <div
            className="w-full xl:flex-1 min-w-0 flex flex-col rounded-[15px] p-4 lg:p-6"
            style={{ border: "1px solid #DBDBDB" }}
          >
            {/* Title + description */}
            <div className="flex flex-col gap-4 flex-1">
              <h3 className="title2">{active.title}</h3>
              <p className="paragraph1">{active.description}</p>
            </div>

            {/* Thumbnails + arrows — pinned to bottom */}
            <div className="flex flex-col gap-4 mt-8">

              {/* Desktop thumbnails */}
              <div className="hidden xl:block w-full overflow-hidden">
                <Carousel opts={{ align: "start" }} setApi={setDesktopApi} className="w-full">
                  <CarouselContent className="-ml-3">
                    {equipments.map((eq, i) => (
                      <CarouselItem key={i} className="pl-3 basis-auto">
                        <button
                          onClick={() => goTo(i)}
                          className={`relative w-[145px] h-[145px] rounded-[15px] overflow-hidden block transition-all duration-200 border-2 ${
                            activeIndex === i
                              ? "border-primary"
                              : "border-transparent opacity-60 hover:opacity-100"
                          }`}
                        >
                          <Image
                            src={eq.image}
                            alt={eq.title}
                            fill
                            className="object-cover"
                            sizes="145px"
                          />
                        </button>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>

              {/* Mobile thumbnails */}
              <div className="xl:hidden w-full overflow-hidden">
                <Carousel opts={{ align: "start" }} setApi={setMobileApi} className="w-full">
                  <CarouselContent className="-ml-3">
                    {equipments.map((eq, i) => (
                      <CarouselItem key={i} className="pl-3 basis-auto">
                        <button
                          onClick={() => goTo(i)}
                          className={`relative w-[117px] h-[117px] rounded-[15px] overflow-hidden block transition-all duration-200 border-2 ${
                            activeIndex === i
                              ? "border-primary"
                              : "border-transparent opacity-60"
                          }`}
                        >
                          <Image
                            src={eq.image}
                            alt={eq.title}
                            fill
                            className="object-cover"
                            sizes="117px"
                          />
                        </button>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>

              {/* Arrows */}
              <div className="flex gap-2 justify-end">
                <Button variant="outline" size="icon" className="rounded-lg w-9 h-9" onClick={handlePrev}>
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-lg w-9 h-9" onClick={handleNext}>
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Technologie