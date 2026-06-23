import Image from "next/image"
import CtaButton from "../ui/CtaButton"
import { Badge } from "../ui/badge"

const Prendre = () => {
  return (
    <div className="relative w-full h-[410px] lg:h-[454px] overflow-hidden">
      <Image
        src="/home/Prendre.png"
        alt="Prendre contact"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 gap-4">
        <Badge variant="transparent">
          Prendre contact
        </Badge>

        <h2 className="font-semibold text-white text-[17.92px] lg:text-[22.41px] leading-[100%]">
          Planifiez votre séjour dentaire à Sousse
        </h2>

        <p className="text-[15px] lg:text-[17px] text-white max-w-[550px]">
          Recevez un accompagnement personnalisé par notre équipe attentive et
          professionnelle, bénéficiez de conseils adaptés à vos besoins, et
          obtenez votre devis rapidement en toute simplicité pour concrétiser
          votre projet en toute confiance.
        </p>

        <CtaButton className="mt-2">
          Prendre contact
        </CtaButton>
      </div>
    </div>
  )
}

export default Prendre