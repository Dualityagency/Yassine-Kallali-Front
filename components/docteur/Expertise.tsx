import Image from "next/image";
import { Badge } from "../ui/badge";

const Expertise = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-24 py-12 lg:py-20">
      <Badge variant="secondary" className="self-start">
        Une expertise reconnue et transmise
      </Badge>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mt-6">

        {/* ── IMAGE COL ── */}
        <div className="lg:flex-1 order-1 lg:order-2 rounded-[15px] overflow-hidden h-[400px] sm:h-[520px] lg:h-[640px]">
          <div className="relative w-full h-full">
            <Image
              src="/doctor/doctor.png"
              alt="Dr. Yassine KALLALI"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* ── TEXT COL ── */}
        <div className="flex flex-col gap-5 lg:w-1/2 order-2 lg:order-1 bg-background">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f2a5e] leading-tight">
            Dr. Yassine KALLALI,{" "}
            <span className="font-normal">
              Chirurgien-dentiste, implantologiste et formateur.
            </span>
          </h2>

          <p className="text-sm lg:text-base text-slate-600 leading-relaxed">
            Fort de plus de 20 ans d&apos;expérience, le Dr. Yassine KALLALI,
            chirurgien-dentiste et implantologiste à Sousse, est reconnu pour
            son expertise en restauration dentaire complète et en implants
            dentaires. Également formateur, il partage son savoir-faire auprès
            de praticiens en Tunisie et à l&apos;international.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Expertise;