import { Badge } from "../ui/badge"
import Image from "next/image"
import CtaButton from "../ui/CtaButton"

const Naturel = () => {
  return (
    <div className="flex flex-col px-4 md:px-10 lg:px-20 pt-10 lg:pt-24">
      
      {/* Badge */}
      <div className="mb-4">
        <Badge variant={"secondary"} className="text-sm uppercase tracking-wider">
          L'ART DU SOURIRE NATUREL
        </Badge>
      </div>

      {/* 2 Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        
        {/* Left Column */}
        <div className="flex flex-col order-2 lg:order-1">
          {/* Title */}
          <h1 className="title1 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Votre Expert en Esthétique Dentaire à Sousse.
          </h1>

          <div className="flex flex-row gap-4 mb-6">
            {/* Small Image */}
            <div className="relative w-[115px] h-[127px] rounded-[10.35px] overflow-hidden flex-shrink-0 sm:w-[321px] sm:h-[193px] sm:rounded-[15px]">
              <Image
                src="/esthetique/naturel.png" 
                alt="Sourire naturel"
                fill
                className="object-cover"
              />
            </div>

            <div className="bg-primary text-white p-4 sm:p-6 md:p-8 rounded-[15px] flex-1 min-w-0">
              <p className="text-base sm:text-lg md:text-xl font-medium">
                Un sourire pensé pour vous.
              </p>
              <p className="text-xs sm:text-sm md:text-base opacity-90 mt-2">
                Parce qu'un beau sourire n'est pas seulement esthétique, il doit aussi être naturel, harmonieux et en accord avec votre visage.
              </p>
            </div>
          </div>



            <div className="bg-background p-7 rounded-[15px] ">
          {/* Subtitle */} 
          <h2 className="title3">
            L'art d'un sourire harmonieux
          </h2>
          <p className="text-primary text-[15px] text-[16px] mb-6">
            Un sourire harmonieux influence directement la confiance en soi. Le Dr Yassine KALLALI propose une approche esthétique personnalisée, adaptée à chaque morphologie.
          </p>

          <CtaButton variant="blue" className="w-fit">
            Prendre rendez-vous
          </CtaButton>
            </div>

        </div>

        {/* Right Column - Main Image */}
        <div className="flex items-start justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative w-full max-w-[339px] md:max-w-[568px] h-[280px] md:h-[675px] rounded-[15px] overflow-hidden">
            <Image
              src="/esthetique/naturel2.png" 
              alt="Esthétique dentaire"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Naturel