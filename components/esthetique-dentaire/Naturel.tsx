import Image from "next/image";
import CtaButton from "../ui/CtaButton";
import { Badge } from "../ui/badge";

const Naturel = () => {
  return (
    <div className="pb-12 lg:pb-15 px-4 sm:px-8 lg:px-24">
              <Badge>
            L&apos;art du sourire naturel

           </Badge>
      <div className="flex flex-col lg:flex-row lg:items-stretch gap-8 lg:gap-12">

        {/* ── LEFT COL ── */}
        <div className="flex flex-col gap-6 lg:w-1/2">


   


          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f2a5e] leading-tight">
            Votre Expert en Esthétique Dentaire à Sousse.
          </h1>

          <div className="flex flex-row gap-4 items-stretch w-full">

  <div className="relative rounded-[10px] lg:rounded-[15px] overflow-hidden bg-[#dbeafe] w-[30%] h-[127px] lg:h-[193px]">
    <Image
      src="/esthetique/naturel.png"
      alt="Produits dentaires"
      fill
      className="object-cover"
    />
  </div>

  <div className="flex-1 flex-shrink-0 bg-[#0f2a5e] rounded-[10px] lg:rounded-[15px] p-4 lg:p-5 flex flex-col justify-center min-w-0">
    <p className="text-[13px] lg:text-xs font-bold text-white uppercase tracking-wider mb-2">
      Un sourire pensé pour vous.
    </p>
    <p className="text-[10px] lg:text-sm text-slate-300 leading-relaxed">
      Parce qu&apos;un beau sourire n&apos;est pas seulement esthétique,
      il doit aussi être naturel, harmonieux et en accord avec votre visage.
    </p>
  </div>

</div>

          {/* Bottom card */}
          <div className="bg-background  rounded-xl p-6">
            <p className="font-semibold text-primary text-[18px] lg:text-[20px] leading-[100%]">
              L&apos;art d&apos;un sourire harmonieux
            </p>
            <p className="font-normal text-primary text-[15px] lg:text-[16px] leading-[100%] py-4">
              Un sourire harmonieux influence directement la confiance en soi.
              Le Dr Yassine KALLALI propose une approche esthétique personnalisée,
              adaptée à chaque morphologie.
            </p>
            <CtaButton variant="blue">
              Demander une consultation
            </CtaButton>
          </div>
        </div>

        {/* ── RIGHT COL — hero image ── */}
        <div className="relative lg:flex-1 rounded-[15px] overflow-hidden w-full h-[280px] lg:h-[675px]">
          <Image
            src="/esthetique/naturel2.png"
            alt="Dr Yassine Kallali – esthétique dentaire"
            fill
            className="object-cover"
            priority
          />
        </div>

      </div>
    </div>
  );
};

export default Naturel;