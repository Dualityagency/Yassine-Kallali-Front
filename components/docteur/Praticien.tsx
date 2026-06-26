"use client";

import { useTranslations } from "next-intl";
import { Badge } from "../ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Praticien = () => {
  const t = useTranslations("doctor.praticien");

  const cards = [
    { title: t("cards.0.title"), text: t("cards.0.text") },
    { title: t("cards.1.title"), text: t("cards.1.text") },
    { title: t("cards.2.title"), text: t("cards.2.text") },
  ];

  return (
    <div className="px-4 sm:px-6 py-11 lg:py-19 lg:px-20">

      <div className="pb-6 lg:pb-10">
        <Badge>{t("badge")}</Badge>
      </div>

      {/* Main layout */}
      <div className="flex flex-col xl:flex-row xl:justify-between gap-8 xl:gap-4">

        {/* Left — title + text */}
        <div className="flex flex-col gap-4 xl:max-w-[600px]">
          <span className="title2">{t("title")}</span>
          <p className="paragraph1">{t("description")}</p>
        </div>

        {/* Desktop cards */}
        <div className="hidden xl:flex flex-col gap-4">
          {cards.map((card, i) => (
            <div
              key={i}
              className="w-[630px] h-[178px] bg-background rounded-[15px] p-6 flex flex-col justify-center gap-3"
            >
              <p className="font-semibold text-base">{card.title}</p>
              <p className="text-sm paragraph1 leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="xl:hidden overflow-hidden">
          <Carousel opts={{ align: "start" }}>
            <CarouselContent className="-ml-4">
              {cards.map((card, i) => (
                <CarouselItem key={i} className="pl-4 basis-auto">
                  <div className="w-[339px] h-[237px] bg-background rounded-[15px] p-6 flex flex-col justify-center gap-3">
                    <p className="font-semibold text-base">{card.title}</p>
                    <p className="text-sm paragraph1 leading-relaxed">{card.text}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

      </div>
    </div>
  );
};

export default Praticien;