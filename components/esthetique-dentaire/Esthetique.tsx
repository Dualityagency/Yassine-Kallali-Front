import { Badge } from "../ui/badge"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

const images = [
  "/esthetique/esthetique1.png",
  "/esthetique/esthetique2.png",
  "/esthetique/esthetique3.png",
]

const Esthetique = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-20 py-11 lg:py-19">

      {/* Section 1 - Badge + Title + Text */}
      <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-12">
        <div className="shrink-0">
          <Badge className="w-fit">ESTHÉTIQUE ET IMPLANTOLOGIE</Badge>
        </div>

        <div className="flex flex-col gap-4 lg:gap-6 lg:max-w-[850px]">
          <span className="title2">
            Synergie entre Esthétique et Implants.
          </span>
          <span className="paragraph1">
            Un beau sourire ne se limite pas à la blancheur. C&apos;est
            l&apos;équilibre parfait entre la santé des gencives, la structure
            osseuse et l&apos;esthétique des dents.
            <br /><br />
            Pour nos patients nécessitant des implants, nous intégrons
            systématiquement une approche esthétique globale. Chaque implant est
            couronné par une pièce en céramique conçue pour se fondre
            invisiblement dans votre sourire existant, alliant fonction
            mécanique et beauté naturelle.
          </span>
        </div>
      </div>

      {/* Section 2 - Text + Carousel */}
      <div className="mt-12 lg:mt-16 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8">

        {/* Text */}
        <div className="flex flex-col gap-1">
          <span className="text-sm lg:text-[14px] font-semibold text-primary leading-tight">
            Réhabilitation complète
          </span>
          <span className="paragraph1">
            Remplacer et embellir simultanément.
          </span>
          <span className="text-sm lg:text-[14px] font-semibold text-primary leading-tight mt-3">
            Matériaux Bio-compatibles
          </span>
          <span className="paragraph1">
            Zircone et céramique de grade médical.
          </span>
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
                    alt={`Esthétique ${index + 1}`}
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