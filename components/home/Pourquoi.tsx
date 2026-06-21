import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

type CardProps = {
  icon: string
  title: string
  text: string
  iconClassName: string
}

const pourquoiNousCards = [
  {
    icon: "/home/Technique.png",
    title: "Technique de l'implant immédiat",
    text: "Réduction du temps de traitement grâce à la pose immédiate de l'implant après extraction, préservant os et gencive.",
    iconClassName: "w-[15px] h-[20.73px] lg:w-[18.67px] lg:h-[25.33px]",
  },
  {
    icon: "/home/Esthetique.png",
    title: "Esthétique dentaire aux normes mondiales",
    text: "Protocoles cliniques rigoureux et matériaux premium (Titane Grade 5 / Zircone), conformes aux normes européennes CE.",
    iconClassName: "w-[28.76px] h-[27.45px] lg:w-[29.33px] lg:h-[28px]",
  },
  {
    icon: "/home/suivi.png",
    title: "Suivi à distance possible après retour",
    text: "Pour nos patients à l'étranger, nous assurons un suivi post-opératoire personnalisé via téléconsultation sécurisée.",
    iconClassName: "w-[26.67px] h-[24px] lg:w-[26.67px] lg:h-[24px]",
  },
]

const Card = ({ icon, title, text, iconClassName }: CardProps) => {
  return (
    <div className="flex w-[338.85px] lg:w-[414px] flex-shrink-0 flex-row gap-4 rounded-[16px] bg-background p-6 lg:p-8 h-auto min-h-[196px] lg:min-h-[240px]">
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
  return (
    <div className=" py-12  lg:pt-19 lg:pb-20 px-6 lg:px-20">
      <div className="flex flex-col gap-4  lg:flex-row lg:items-start ">
        <div className="inline-flex w-fit items-center rounded-full bg-primary px-4 py-2">
          <span className="whitespace-nowrap text-[14px] font-medium text-white">
            Pourquoi nous
          </span>
        </div>

        <div className="lg:ml-auto lg:max-w-[700px]">
          <h2 className="text-primary text-[25px] font-semibold leading-none tracking-normal lg:text-[30px]">
            L'excellence au service de votre sourire, avec une expertise
            dédiée à votre bien-être, votre confort et la beauté naturelle de
            chaque sourire.
          </h2>

          <p className="mt-3 text-[15px] font-normal leading-[1.6] tracking-normal text-[#383838] lg:text-[20px]">
            Parce que chaque sourire est unique, nous mettons à votre
            disposition des soins dentaires modernes, personnalisés et
            réalisés avec passion afin de vous offrir confiance, santé et
            sérénité au quotidien.
          </p>
        </div>
      </div>

      <div className="mt-10 w-full flex justify-center ">
        <Carousel
          opts={{
            align: "center",
            loop: false,
          }}
          className="w-full min-w-0 flex justify-center"
        >
          <CarouselContent>
            {pourquoiNousCards.map((card) => (
              <CarouselItem
                key={card.title}
                className="basis-auto"
              >
                <Card
                  icon={card.icon}
                  title={card.title}
                  text={card.text}
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