"use client";

import { useState } from "react";
import { Badge } from "../ui/badge";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const items = [
  {
    id: 0,
    title: "Parcours professionnel",
    subtitle: "Parcours professionnel et expertise.",
    content: (
      <div className="flex flex-col gap-5">
        <p className="text-[#0f2a5e] font-semibold text-2xl leading-none">Une expertise forgée par l'expérience.</p>
        <p className="text-slate-600 text-xl leading-none">
          Le Dr. Yassine KALLALI est chirurgien-dentiste diplômé de [Faculté / Université], spécialisé en implantologie
          et en esthétique dentaire. Installé à Sousse depuis 2015, il a développé une pratique centrée sur l'implant
          immédiat post-extraction, une technique exigeante qu'il a progressivement affinée et qu'il enseigne
          aujourd'hui à d'autres praticiens. Son cabinet reçoit des patients en provenance de France, de Belgique, de
          Suisse, d'Italie, du Royaume-Uni et du Canada, ainsi que de la diaspora maghrébine résidant en Europe. Il
          consulte en français, en anglais, en arabe et en italien.
        </p>
        <p className="text-[#0f2a5e] font-semibold text-[18px] leading-none">
          Il est inscrit au Tableau de l'Ordre des Chirurgiens-Dentistes de Tunisie sous le numéro N°12345.
        </p>
      </div>
    ),
    mobileContent: (
      <div className="flex flex-col gap-5">
        <p className="text-[#0f2a5e] font-semibold text-xl leading-none">Une expertise forgée par l'expérience.</p>
        <p className="text-slate-600 text-[15px] leading-none">
          Le Dr. Yassine KALLALI est chirurgien-dentiste diplômé de [Faculté / Université], spécialisé en implantologie
          et en esthétique dentaire. Installé à Sousse depuis 2015, il a développé une pratique centrée sur l'implant
          immédiat post-extraction, une technique exigeante qu'il a progressivement affinée et qu'il enseigne
          aujourd'hui à d'autres praticiens. Son cabinet reçoit des patients en provenance de France, de Belgique, de
          Suisse, d'Italie, du Royaume-Uni et du Canada, ainsi que de la diaspora maghrébine résidant en Europe. Il
          consulte en français, en anglais, en arabe et en italien.
        </p>
        <p className="text-[#0f2a5e] font-semibold text-[18px] leading-none">
          Il est inscrit au Tableau de l'Ordre des Chirurgiens-Dentistes de Tunisie sous le numéro N°12345.
        </p>
      </div>
    ),
  },
{
  id: 1,
  title: "Formation académique",
  subtitle: "Formation et qualifications.",
  content: (
    <div className="flex flex-col gap-5">
      <p className="text-[#0f2a5e] font-semibold text-2xl leading-none">
        Un parcours académique d'excellence.
      </p>

      <div className="flex flex-col">
        {[
          {
            title: "Diplôme de chirurgie dentaire.",
            sub: "Doctorat en Médecin Dentaire.",
            place: "Faculté de Médecine Dentaire de Monastir, Tunisie (2003).",
          },
          {
            title: "Spécialisation en implantologie.",
            sub: "Diplôme Universitaire d'Implantologie Orale.",
            place: "Université Paris Cité, France (2008).",
          },
          {
            title: "Formation en Esthétique Dentaire & Smile Design.",
            sub: "Certification en Esthétique Dentaire et Digital Smile Design (DSD).",
            place: "Digital Smile Design Academy, Madrid, Espagne (2015).",
          },
          {
            title: "Masterclass en Réhabilitation Complète sur Implants.",
            sub: "Certification en Réhabilitation Complète sur Implants.",
            place: "Malo Clinic, Lisbonne, Portugal (2019).",
          },
        ].map((item, i, arr) => (
          <div key={i} className="flex gap-4 items-start">
            {/* Timeline */}
            <div className="relative flex justify-center flex-shrink-0 w-3">
              {i < arr.length - 1 && (
                <div className="absolute top-4 bottom-[-36px] w-px bg-slate-300" />
              )}

              <div className="relative z-10 w-3 h-3 rounded-full bg-[#0f2a5e] mt-1" />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2 pb-8">
              <p className="text-[#0f2a5e] font-semibold text-[18px] leading-tight">
                {item.title}
              </p>

              <p className="text-slate-600 text-xl leading-relaxed">
                {item.sub}
              </p>

              <p className="text-slate-400 text-xl leading-relaxed">
                {item.place}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),

  mobileContent: (
    <div className="flex flex-col gap-5">
      <p className="text-[#0f2a5e] font-semibold text-xl leading-none">
        Un parcours académique d'excellence.
      </p>

      <div className="flex flex-col">
        {[
          {
            title: "Diplôme de chirurgie dentaire.",
            sub: "Doctorat en Médecin Dentaire.",
            place: "Faculté de Médecine Dentaire de Monastir, Tunisie (2003).",
          },
          {
            title: "Spécialisation en implantologie.",
            sub: "Diplôme Universitaire d'Implantologie Orale.",
            place: "Université Paris Cité, France (2008).",
          },
          {
            title: "Formation en Esthétique Dentaire & Smile Design.",
            sub: "Certification en Esthétique Dentaire et Digital Smile Design (DSD).",
            place: "Digital Smile Design Academy, Madrid, Espagne (2015).",
          },
          {
            title: "Masterclass en Réhabilitation Complète sur Implants.",
            sub: "Certification en Réhabilitation Complète sur Implants.",
            place: "Malo Clinic, Lisbonne, Portugal (2019).",
          },
        ].map((item, i, arr) => (
          <div key={i} className="flex gap-4 items-start">
            {/* Timeline */}
            <div className="relative flex justify-center flex-shrink-0 w-3">
              {i < arr.length - 1 && (
                <div className="absolute top-4 bottom-[-32px] w-px bg-slate-300" />
              )}

              <div className="relative z-10 w-3 h-3 rounded-full bg-[#0f2a5e] mt-1" />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-1.5 pb-7">
              <p className="text-[#0f2a5e] font-semibold text-[18px] leading-tight">
                {item.title}
              </p>

              <p className="text-slate-600 text-[15px] leading-relaxed">
                {item.sub}
              </p>

              <p className="text-slate-400 text-[15px] leading-relaxed">
                {item.place}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
},
  {
    id: 2,
    title: "Séminaires et conférences",
    subtitle: "Activités de formation et d'enseignement.",
    content: (
      <div className="flex flex-col gap-5">
        <p className="text-[#0f2a5e] font-semibold text-2xl leading-none">Partager l'expertise, transmettre le savoir.</p>
        <p className="text-slate-600 text-xl leading-none">
          Au-delà de son cabinet, le Dr. Yassine KALLALI intervient en tant que conférencier dans des séminaires
          professionnels dédiés à l'implantologie et à l'esthétique dentaire. Il a présenté ses protocoles lors de
          [placeholder : congrès dentaires, journées scientifiques, rencontres interprofessionnelles] en Tunisie et à
          l'étranger.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 bg-[#0f2a5e] rounded-[10px] p-5">
            <p className="text-white font-bold text-3xl">10+</p>
            <p className="text-slate-300 text-xs uppercase tracking-wider mt-1">Conférences</p>
          </div>
          <div className="flex-1 bg-[#0f2a5e] rounded-[10px] p-5">
            <p className="text-white font-bold text-3xl">1000+</p>
            <p className="text-slate-300 text-xs uppercase tracking-wider mt-1">Implants posés/an</p>
          </div>
        </div>
      </div>
    ),
    mobileContent: (
      <div className="flex flex-col gap-5">
        <p className="text-[#0f2a5e] font-semibold text-xl leading-none">Partager l'expertise, transmettre le savoir.</p>
        <p className="text-slate-600 text-[15px] leading-none">
          Au-delà de son cabinet, le Dr. Yassine KALLALI intervient en tant que conférencier dans des séminaires
          professionnels dédiés à l'implantologie et à l'esthétique dentaire. Il a présenté ses protocoles lors de
          [placeholder : congrès dentaires, journées scientifiques, rencontres interprofessionnelles] en Tunisie et à
          l'étranger.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 bg-[#0f2a5e] rounded-[10px] p-5">
            <p className="text-white font-bold text-3xl">10+</p>
            <p className="text-slate-300 text-xs uppercase tracking-wider mt-1">Conférences</p>
          </div>
          <div className="flex-1 bg-[#0f2a5e] rounded-[10px] p-5">
            <p className="text-white font-bold text-3xl">1000+</p>
            <p className="text-slate-300 text-xs uppercase tracking-wider mt-1">Implants posés/an</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Langues de consultation",
    subtitle: "Langues disponibles en consultation.",
    content: (
      <div className="flex flex-col gap-5">
        <p className="text-[#0f2a5e] font-semibold text-2xl leading-none">Un accompagnement sans frontières.</p>
        <p className="text-slate-600 text-xl leading-none">
          Le Dr. Yassine KALLALI reçoit et communique avec ses patients en français, anglais, arabe et italien. Les
          devis, comptes-rendus post-opératoires et suivis à distance sont rédigés dans la langue du patient.
        </p>
        <div className="flex flex-wrap gap-2">
          {["🌐 Français", "🌐 Anglais", "🌐 Arabe", "🌐 Italien"].map((lang) => (
            <Badge key={lang} variant="gray">
              {lang}
            </Badge>
          ))}
        </div>
      </div>
    ),
    mobileContent: (
      <div className="flex flex-col gap-5">
        <p className="text-[#0f2a5e] font-semibold text-xl leading-none">Un accompagnement sans frontières.</p>
        <p className="text-slate-600 text-[15px] leading-none">
          Le Dr. Yassine KALLALI reçoit et communique avec ses patients en français, anglais, arabe et italien. Les
          devis, comptes-rendus post-opératoires et suivis à distance sont rédigés dans la langue du patient.
        </p>
        <div className="flex flex-wrap gap-2">
          {["🌐 Français", "🌐 Anglais", "🌐 Arabe", "🌐 Italien"].map((lang) => (
            <Badge key={lang} variant="gray">
              {lang}
            </Badge>
          ))}
        </div>
      </div>
    ),
  },
];

const Parcours = () => {
  const [activeId, setActiveId] = useState<number>(0);
  const [openMobileId, setOpenMobileId] = useState<number | null>(null);

  const active = items.find((i) => i.id === activeId)!;

  return (
    <div className="pb-12 lg:pb-15">
      <div className="bg-background px-4 sm:px-6 py-11 lg:py-19 lg:px-20">

        {/* Header */}
        <div className="flex flex-col gap-4">
          <div className="pb-4 lg:pb-8">
            <Badge>Parcours et expertise</Badge>
          </div>
          <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-8">
            <span className="title2">
              L'excellence clinique au cœur de chaque traitement.
            </span>
            <span className="paragraph1">
              Un savoir-faire reconnu par des patients et des praticiens venus de Tunisie et de l'étranger.
            </span>
          </div>
        </div>

        {/* ── DESKTOP: 2 col ── */}
        <div className="hidden lg:flex flex-row gap-8 mt-12">

          {/* Left: list */}
          <div className="flex flex-col flex-1">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className={`flex flex-row items-center justify-between gap-4 py-6 text-left border-b border-slate-200 transition-colors ${
                  activeId === item.id ? "opacity-100" : "opacity-50 hover:opacity-75"
                }`}
              >
                <div className="flex flex-col gap-1 flex-1 min-w-0">
                  <span className="text-[#0f2a5e] font-normal text-[37px] leading-[120%]">{item.title}</span>
                  <span className="text-slate-500 font-normal text-[15px] leading-none">{item.subtitle}</span>
                </div>
                {activeId === item.id ? (
                  <ArrowUpRight className="w-6 h-6 text-[#0f2a5e] flex-shrink-0" />
                ) : (
                  <ArrowRight className="w-6 h-6 text-slate-400 flex-shrink-0" />
                )}
              </button>
            ))}
          </div>

          {/* Right: content card */}
          <div className="flex-1 border border-slate-200 rounded-[15px] p-8">
            {active.content}
          </div>

        </div>

        {/* ── MOBILE: accordion ── */}
        <div className="flex lg:hidden flex-col mt-8">
          {items.map((item) => (
            <div key={item.id} className="border-b border-slate-200">
              <button
                onClick={() => setOpenMobileId(openMobileId === item.id ? null : item.id)}
                className="flex flex-row items-center justify-between gap-4 py-5 w-full text-left"
              >
                <div className="flex flex-col gap-1 flex-1 min-w-0">
                  <span className="text-[#0f2a5e] font-normal text-[23px] leading-[120%]">{item.title}</span>
                  <span className="text-slate-500 font-normal text-[15px] leading-none">{item.subtitle}</span>
                </div>
                <ArrowUpRight
                  className={`w-5 h-5 text-[#0f2a5e] flex-shrink-0 transition-transform ${
                    openMobileId === item.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openMobileId === item.id && (
                <div className="pb-5">
                  {item.mobileContent}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Parcours;