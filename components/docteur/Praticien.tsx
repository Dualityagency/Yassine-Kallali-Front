import { Badge } from "../ui/badge"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

const cards = [
  {
    title: "Maîtrise et transmission.",
    text: "Un praticien qui enseigne sa technique à d'autres est un praticien qui la maîtrise pleinement. La transmission exige une compréhension profonde, une précision constante et une expérience clinique solide.",
  },
  {
    title: "Protocoles rigoureux et actualisés.",
    text: "Il ne peut pas se permettre l'approximation. Chaque protocole est documenté, justifié et régulièrement actualisé afin de garantir une pratique fiable, moderne et reproductible.",
  },
  {
    title: "Exigence et confiance internationale",
    text: "Pour un patient qui se déplace depuis Paris, Milan ou Londres, ce niveau d'exigence n'est pas un détail. C'est une garantie de sérieux, de sécurité et de qualité clinique constante.",
  },
]

const Praticien = () => {
  return (
    <div className="px-4 sm:px-6 py-11 lg:py-19 lg:px-20">

      <div className="pb-6 lg:pb-10">
        <Badge>Praticien formateur</Badge>
      </div>

      {/* Main layout */}
      <div className="flex flex-col xl:flex-row xl:justify-between gap-8 xl:gap-4">

        {/* Left — title + text */}
        <div className="flex flex-col gap-4 xl:max-w-[400px]">
          <span className="title2">
            Pourquoi choisir un praticien formateur reconnu en implantologie et en chirurgie implantaire avancée ?
          </span>
          <p className="paragraph1">
            Une expertise clinique avancée fondée sur la maîtrise des techniques, la rigueur des protocoles et la transmission du savoir auprès de chirurgiens-dentistes en formation, dans un cadre structuré et orienté vers l'excellence.
          </p>
        </div>

        {/* Right — desktop: stacked cards, mobile: carousel */}

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
  )
}

export default Praticien