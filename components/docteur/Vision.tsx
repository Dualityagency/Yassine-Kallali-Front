import Image from "next/image"
import { Badge } from "../ui/badge"

const Vision = () => {
  return (
    <section className="pb-12 lg:pb-20 px-6 lg:px-20">
      <Badge>La vision du Dr. Yassine Kallali</Badge>

      {/* ── DESKTOP ── */}
      <div className="hidden lg:flex flex-col mt-10">
        {/* Quote */}
        <p className="italic font-medium text-[60px] leading-[100%] tracking-normal text-primary mb-10">
          "Former d'autres chirurgiens-dentistes m'oblige à rester à la pointe.
          C'est une discipline autant qu'une responsabilité."
        </p>

        {/* 2 columns */}
        <div className="flex gap-8">
          {/* LEFT COL */}
          <div className="flex flex-col flex-1">
            {/* Image centered */}
            <div className="flex justify-start">
              <Image
                src="/doctor/vision1.png"
                alt="Outils dentaires"
                width={244}
                height={265}
                className="w-[244px] h-[265px] object-cover rounded-[15px]"
              />
            </div>

            {/* Name aligned right */}
            <div className="flex justify-center mt-4">
              <p className="text-sm font-semibold text-[#1a2e4a] tracking-wide">
                Dr. Yassine KALLALI
              </p>
            </div>

            {/* Subtext + stats */}
            <div className="mt-5 flex flex-col gap-5">



                
              <p className="font-semibold text-gray text-[20px] leading-[100%]">
                Reconnu par des milliers de patients pour l'excellence de ses soins dentaires&nbsp;!
              </p>

              <div className="flex gap-10">
                <div>
                  <p className="text-[45px] font-bold text-[#1a2e4a]">98 %</p>
                  <p className="text-[17px] font-medium uppercase tracking-widest text-gray">Satisfaction</p>
                </div>
                <div>
                  <p className="text-[45px] font-bold text-[#1a2e4a]">5,000</p>
                  <p className="text-[17px] font-medium uppercase tracking-widest text-gray">Des sourires révélés</p>
                </div>
                <div>
                  <p className="text-[45px] font-bold text-[#1a2e4a]">4.9</p>
                  <p className="text-[17px] font-medium uppercase tracking-widest text-gray">Avis Google</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COL */}
          <div className="flex items-end">
            <Image
              src="/doctor/vision2.png"
              alt="Dr. Yassine Kallali au travail"
              width={371}
              height={307}
              className="w-[371px] h-[307px] object-cover rounded-[15px]"
            />
          </div>
        </div>
      </div>

      {/* ── MOBILE ── */}
      <div className="flex flex-col gap-6 mt-8 lg:hidden">
        <p className="italic text-[32px] leading-[100%] tracking-normal font-medium text-[#1a2e4a]">
          "Former d'autres chirurgiens-dentistes m'oblige à rester à la pointe.
          C'est une discipline autant qu'une responsabilité."
        </p>

        <p className="text-sm font-semibold text-[#1a2e4a] tracking-wide">
          Dr. Yassine KALLALI
        </p>

        <p className="text-sm text-gray-500">
          Reconnu par des milliers de patients pour l'excellence de ses soins dentaires&nbsp;!
        </p>

        <div className="flex gap-8">
          <div>
            <p className="text-2xl font-bold text-[#1a2e4a]">98 %</p>
            <p className="text-xs uppercase tracking-widest text-gray-400">Satisfaction</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[#1a2e4a]">5,000</p>
            <p className="text-xs uppercase tracking-widest text-gray-400">Des sourires révélés</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[#1a2e4a]">4.9</p>
            <p className="text-xs uppercase tracking-widest text-gray-400">Avis Google</p>
          </div>
        </div>

        <div className="flex gap-4">
          <Image
            src="/doctor/vision1.png"
            alt="Outils dentaires"
            width={143}
            height={155}
            className="w-[143px] h-[155px] object-cover rounded-[15px]"
          />
          <Image
            src="/doctor/vision2.png"
            alt="Dr. Yassine Kallali au travail"
            width={187}
            height={155}
            className="w-[187px] h-[155px] object-cover rounded-[15px]"
          />
        </div>
      </div>
    </section>
  )
}

export default Vision