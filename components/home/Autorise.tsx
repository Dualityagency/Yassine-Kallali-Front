import Image from "next/image"
import { Badge } from "../ui/badge"
import CtaButton from "../ui/CtaButton"

const Autorise = () => {
  return (
    <div className="px-6 lg:px-20 pb-18">

      {/* Badge + titre */}
      <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-start">
        <Badge>
          AUTORITÉ & EXPERTISE
        </Badge>
        <span className="title2 lg:max-w-[600px]">
          Un Praticien Formateur & Conférencier International.
        </span>
      </div>

      {/* Image + carte */}
      <div className="mt-8 flex flex-col items-center lg:flex-row lg:items-stretch lg:gap-6">

        {/* Image */}
        <div className="flex justify-center lg:justify-start flex-shrink-0 lg:w-[45%] xl:w-[55%]">
          <Image
            src="/home/autorise.png"
            alt="Dr. Yassine KALLALI"
            width={793}
            height={525}
            className="w-full max-w-[339px] lg:max-w-none h-auto rounded-[15px] object-cover"
          />
        </div>

        {/* Carte */}
        <div className="
          flex flex-col justify-between gap-6 rounded-[15px] bg-background p-6
          w-[339px] h-[346px] -mt-6
          lg:w-auto lg:h-auto lg:mt-0 lg:p-10 lg:flex-1
        ">

          {/* Top: name + title */}
          <div className="flex flex-col gap-1">
            <h3 className="text-[18px] lg:text-[24px] font-bold leading-tight text-primary">
              Dr. Yassine KALLALI
            </h3>
            <span className="text-[12px] lg:text-[16px] font-medium uppercase tracking-widest text-[#383838]">
              20 Années D'experience
            </span>
          </div>

          {/* Bottom: paragraph + CTA */}
          <div className="flex flex-col gap-4">
            <p className="paragraph2">
              Le Dr. Yassine KALLALI ne se contente pas de soigner ; il transmet.
              Expert reconnu en implantologie guidée par ordinateur, il dirige
              régulièrement des sessions de formation clinique et intervient lors
              de congrès internationaux majeurs.
            </p>
            <CtaButton className="w-fit">
              À Propos le docteur
            </CtaButton>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Autorise