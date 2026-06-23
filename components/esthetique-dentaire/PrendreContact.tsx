import { Badge } from "../ui/badge"
import Image from "next/image"
import CtaButton from "../ui/CtaButton"

const PrendreContact = () => {
  return (
    <div className="flex flex-col gap-6 px-4 sm:px-6 lg:px-20">
      <Badge className="w-fit">Prendre contact</Badge>

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between w-full">

        <Image
          src="/esthetique/contact.png"
          alt="Prendre contact"
          width={542}
          height={543}
          className="rounded-[9.33px] lg:rounded-[15px] w-[339px] h-[340px] lg:w-[542px] lg:h-[543px] object-cover shrink-0"
        />

        <div className="bg-background rounded-[15px] p-6 lg:p-10 flex flex-col gap-6 lg:gap-8 w-[339px] h-[555px] lg:w-auto lg:h-[543px] lg:flex-1">
          <span className="title1">
            Votre sourire idéal commence ici.
          </span>

          <span className="paragraph2">
            Que vous envisagiez des facettes, un blanchiment, du composite
            esthétique ou une transformation complète du sourire, notre équipe
            vous accompagne à chaque étape de votre projet. De la première
            consultation virtuelle jusqu&apos;à votre traitement à Sousse, nous
            créons un plan personnalisé pour obtenir un résultat naturel,
            harmonieux et durable.
          </span>

          <span className="font-medium text-black text-[13px] lg:text-[16px] leading-[100%]">
            Demander une consultation gratuite et découvrez les possibilités de
            votre futur sourire.
          </span>

          <div>
            <CtaButton className="w-fit">
              Demander une consultation gratuite
            </CtaButton>
          </div>
        </div>

      </div>
    </div>
  )
}

export default PrendreContact