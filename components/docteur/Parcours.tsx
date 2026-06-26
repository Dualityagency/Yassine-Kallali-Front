"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Badge } from "../ui/badge";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const Parcours = () => {
  const t = useTranslations("doctor.parcours");
  const [activeId, setActiveId] = useState<number>(0);
  const [openMobileId, setOpenMobileId] = useState<number | null>(null);

  const formationItems = [
    {
      title: t("items.formation.items.0.title"),
      sub: t("items.formation.items.0.sub"),
      place: t("items.formation.items.0.place"),
    },
    {
      title: t("items.formation.items.1.title"),
      sub: t("items.formation.items.1.sub"),
      place: t("items.formation.items.1.place"),
    },
    {
      title: t("items.formation.items.2.title"),
      sub: t("items.formation.items.2.sub"),
      place: t("items.formation.items.2.place"),
    },
    {
      title: t("items.formation.items.3.title"),
      sub: t("items.formation.items.3.sub"),
      place: t("items.formation.items.3.place"),
    },
  ];

  const langues = [
    t("items.langues.list.0"),
    t("items.langues.list.1"),
    t("items.langues.list.2"),
    t("items.langues.list.3"),
  ];

  // Shared content renderers (used for both desktop and mobile)
  const renderParcoursPro = () => (
    <div className="flex flex-col gap-5">
      <p className="text-[#0f2a5e] font-semibold text-2xl leading-none">
        {t("items.parcoursPro.heading")}
      </p>
      <p className="text-slate-600 text-xl leading-none">
        {t("items.parcoursPro.text")}
      </p>
      <p className="text-[#0f2a5e] font-semibold text-[18px] leading-none">
        {t("items.parcoursPro.order")}
      </p>
    </div>
  );

  const renderParcoursMobile = () => (
    <div className="flex flex-col gap-5">
      <p className="text-[#0f2a5e] font-semibold text-xl leading-none">
        {t("items.parcoursPro.heading")}
      </p>
      <p className="text-slate-600 text-[15px] leading-none">
        {t("items.parcoursPro.text")}
      </p>
      <p className="text-[#0f2a5e] font-semibold text-[18px] leading-none">
        {t("items.parcoursPro.order")}
      </p>
    </div>
  );

  const renderTimeline = (textSize: string, pbSize: string, gapSize: string, bottomOffset: string) => (
    <div className="flex flex-col">
      {formationItems.map((item, i, arr) => (
        <div key={i} className="flex gap-4 items-start">
          <div className="relative flex justify-center flex-shrink-0 w-3">
            {i < arr.length - 1 && (
              <div className={`absolute top-4 ${bottomOffset} w-px bg-slate-300`} />
            )}
            <div className="relative z-10 w-3 h-3 rounded-full bg-[#0f2a5e] mt-1" />
          </div>
          <div className={`flex flex-col gap-2 ${pbSize}`}>
            <p className="text-[#0f2a5e] font-semibold text-[18px] leading-tight">{item.title}</p>
            <p className={`text-slate-600 ${textSize} leading-relaxed`}>{item.sub}</p>
            <p className={`text-slate-400 ${textSize} leading-relaxed`}>{item.place}</p>
          </div>
        </div>
      ))}
    </div>
  );

  const renderFormation = () => (
    <div className="flex flex-col gap-5">
      <p className="text-[#0f2a5e] font-semibold text-2xl leading-none">
        {t("items.formation.heading")}
      </p>
      {renderTimeline("text-xl", "pb-8", "gap-2", "bottom-[-36px]")}
    </div>
  );

  const renderFormationMobile = () => (
    <div className="flex flex-col gap-5">
      <p className="text-[#0f2a5e] font-semibold text-xl leading-none">
        {t("items.formation.heading")}
      </p>
      {renderTimeline("text-[15px]", "pb-7", "gap-1.5", "bottom-[-32px]")}
    </div>
  );

  const renderSeminaires = (textSize: string, headingSize: string) => (
    <div className="flex flex-col gap-5">
      <p className={`text-[#0f2a5e] font-semibold ${headingSize} leading-none`}>
        {t("items.seminaires.heading")}
      </p>
      <p className={`text-slate-600 ${textSize} leading-none`}>
        {t("items.seminaires.text")}
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 bg-[#0f2a5e] rounded-[10px] p-5">
          <p className="text-white font-bold text-3xl">{t("items.seminaires.stats.conferences.value")}</p>
          <p className="text-slate-300 text-xs uppercase tracking-wider mt-1">{t("items.seminaires.stats.conferences.label")}</p>
        </div>
        <div className="flex-1 bg-[#0f2a5e] rounded-[10px] p-5">
          <p className="text-white font-bold text-3xl">{t("items.seminaires.stats.implants.value")}</p>
          <p className="text-slate-300 text-xs uppercase tracking-wider mt-1">{t("items.seminaires.stats.implants.label")}</p>
        </div>
      </div>
    </div>
  );

  const renderLangues = (textSize: string, headingSize: string) => (
    <div className="flex flex-col gap-5">
      <p className={`text-[#0f2a5e] font-semibold ${headingSize} leading-none`}>
        {t("items.langues.heading")}
      </p>
      <p className={`text-slate-600 ${textSize} leading-none`}>
        {t("items.langues.text")}
      </p>
      <div className="flex flex-wrap gap-2">
        {langues.map((lang) => (
          <Badge key={lang} variant="gray">
            🌐 {lang}
          </Badge>
        ))}
      </div>
    </div>
  );

  const items = [
    {
      id: 0,
      title: t("items.parcoursPro.title"),
      subtitle: t("items.parcoursPro.subtitle"),
      content: renderParcoursPro(),
      mobileContent: renderParcoursMobile(),
    },
    {
      id: 1,
      title: t("items.formation.title"),
      subtitle: t("items.formation.subtitle"),
      content: renderFormation(),
      mobileContent: renderFormationMobile(),
    },
    {
      id: 2,
      title: t("items.seminaires.title"),
      subtitle: t("items.seminaires.subtitle"),
      content: renderSeminaires("text-xl", "text-2xl"),
      mobileContent: renderSeminaires("text-[15px]", "text-xl"),
    },
    {
      id: 3,
      title: t("items.langues.title"),
      subtitle: t("items.langues.subtitle"),
      content: renderLangues("text-xl", "text-2xl"),
      mobileContent: renderLangues("text-[15px]", "text-xl"),
    },
  ];

  const active = items.find((i) => i.id === activeId)!;

  return (
    <div className="pb-12 lg:pb-15">
      <div className="bg-background px-4 sm:px-6 py-11 lg:py-19 lg:px-20">

        {/* Header */}
        <div className="flex flex-col gap-4">
          <div className="pb-4 lg:pb-8">
            <Badge>{t("badge")}</Badge>
          </div>
          <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-8">
            <span className="title2">{t("title")}</span>
            <span className="paragraph1">{t("description")}</span>
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