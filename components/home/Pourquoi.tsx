import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { useTranslations } from "next-intl"

type CardProps = {
  icon: string
  title: string
  text: string
  iconClassName: string
}

const pourquoiNousCards = [
  {
    key: "technique",
    icon: "/home/Technique.png",
    iconClassName: "w-[15px] h-[20.73px] lg:w-[18.67px] lg:h-[25.33px]",
  },
  {
    key: "esthetique",
    icon: "/home/Esthetique.png",
    iconClassName: "w-[28.76px] h-[27.45px] lg:w-[29.33px] lg:h-[28px]",
  },
  {
    key: "suivi",
    icon: "/home/suivi.png",
    iconClassName: "w-[26.67px] h-[24px] lg:w-[26.67px] lg:h-[24px]",
  },
]

const Card = ({ icon, title, text, iconClassName }: CardProps) => {
  return (
    <div className="flex w-[338.85px] lg:w-[414px] flex-shrink-0 flex-row gap-4 rounded-[16px] bg-background p-6 lg:p-8 h-full min-h-[196px] lg:min-h-[240px]">
      <div className="flex size-14 shrink-0 items-center justify-center rounded-[12px] bg-primary">
        <Image
          src={icon}
          alt={title}
          width={30}
          height={28}
          className={iconClassName}
        />
      </div>

      <div className="flex flex-col gap-2 overflow-hidden">
        <h3 className="text-[18.34px] font-semibold leading-snug tracking-normal text-primary lg:text-[22.41px]">
          {title}
        </h3>

        <p className="text-[13.1px] font-normal leading-[1.6] tracking-normal text-[#383838] lg:text-[16px]">
          {text}
        </p>
      </div>
    </div>
  )
}

const PourquoiNous = () => {
  const t = useTranslations("home.pourquoiNous")

  return (
    <div className="py-12 lg:pt-19 lg:pb-20 px-6 lg:px-20">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start">
        <div className="inline-flex w-fit items-center rounded-full bg-primary px-4 py-2">
          <span className="whitespace-nowrap text-[14px] font-medium text-white">
            {t("badge")}
          </span>
        </div>

        <div className="lg:ml-auto lg:max-w-[700px]">
          <h2 className="text-primary text-[25px] font-semibold leading-none tracking-normal lg:text-[30px]">
            {t("title")}
          </h2>

          <p className="mt-3 text-[15px] font-normal leading-[1.6] tracking-normal text-[#383838] lg:text-[20px]">
            {t("description")}
          </p>
        </div>
      </div>

      <div className="mt-10 w-full flex justify-center">
        <Carousel
          opts={{ align: "center", loop: false }}
          className="w-full min-w-0 flex justify-center"
        >
          <CarouselContent className="items-stretch">
            {pourquoiNousCards.map((card) => (
              <CarouselItem key={card.key} className="basis-auto">
                <Card
                  icon={card.icon}
                  title={t(`cards.${card.key}.title`)}
                  text={t(`cards.${card.key}.text`)}
                  iconClassName={card.iconClassName}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  )
}

export default PourquoiNous