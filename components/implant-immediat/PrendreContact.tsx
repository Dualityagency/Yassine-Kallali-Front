import Link from "next/link";
import { Badge } from "../ui/badge";
import CtaButton from "../ui/CtaButton";

export default function PrendreContact() {
  return (
    <div
      className="bg-[url(/home/prendreContact.webp)] bg-cover bg-no-repeat
        px-6 lg:px-20 py-12 lg:py-16.5 
        "
    >
      <Badge variant={"tertiary"} className="mb-6 lg:mb-9.5">
        Prendre contact
      </Badge>

      <div className="flex flex-col lg:flex-row justify-between items-end gap-y-6 mb-9 lg:mb-10.25">
        <div className="w-full lg:w-[40%] flex flex-col gap-y-6 lg:gap-y-10.25">
          <h2 className="title1 ">Prêt pour votre nouveau sourire ?</h2>
          <p className="paragraph2 text-white!">
            Nos experts vous accompagnent de la première consultation virtuelle
            jusqu'au résultat final à Sousse.
          </p>
        </div>

        <div className="flex flex-col gap-y-1.5 lg:gap-y-1.75">
          <h3 className="font-medium text-white lg:text-[17px] leading-[100%]">
            Réponse sous 48h
          </h3>
          <h3 className="font-medium text-white lg:text-[17px] leading-[100%]">
            Aucun engagement
          </h3>
          <h3 className="font-medium text-white text-[14.43px] lg:text-[17px] leading-[100%]">
            Expertise en implantologie avancée
          </h3>
          <h3 className="font-medium text-white lg:text-[17px] leading-[100%]">
            Séjour optimisé de 2 à 5 jours
          </h3>
          <h3 className="font-medium text-white lg:text-[17px] leading-[100%]">
            Suivi depuis votre pays de résidence
          </h3>
        </div>
      </div>

      <div
        className="bg-primary flex flex-col lg:flex-row items-center justify-between gap-y-4.75 rounded-[11px]
            px-5.25 lg:px-5 py-4 lg:py-5.5
            "
      >
        <h3 className="w-full lg:w-[26%] font-medium text-white text-[15px] lg:text-[17px] leading-[100%] capitalize">
          Découvrez si vous êtes éligible à un implant immédiat en moins de 48h.
        </h3>

        <Link href={"/contact"}>
          <CtaButton variant="white">
            Demander une évaluation gratuite
          </CtaButton>
        </Link>
      </div>
    </div>
  );
}
