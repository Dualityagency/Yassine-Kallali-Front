"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import LegalSidebar from "./LegalSidebar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Badge } from "../ui/badge";
import CtaButton from "../ui/CtaButton";

type T = ReturnType<typeof useTranslations<"legal">>;

const Section1 = ({ t }: { t: T }) => (
  <div className="border border-[#D9D9D9] rounded-lg p-5  space-y-3">
    <p>
      {t("sections.s1.intro")}{" "}
      <span className="text-gray text-[16px] font-semibold ">{t("sections.s1.clinic")}</span>,{" "}
      {t("sections.s1.directedBy")}
    </p>
    <dl className="space-y-2">
      {(["responsable", "cnomdt", "siege", "contact"] as const).map((key) => (
        <div key={key} className="flex flex-wrap gap-1  text-gray text-[16px] ">
          <dt className="font-semibold  ">{t(`sections.s1.rows.${key}.label`)} :</dt>
          <dd >{t(`sections.s1.rows.${key}.value`)}</dd>
        </div>
      ))}
    </dl>
  </div>
);

const Section2 = ({ t }: { t: T }) => {
  const items = (["contact", "devis", "suivi"] as const).map((key) => ({
    key,
    label: t(`sections.s2.items.${key}.label`),
    desc: t(`sections.s2.items.${key}.desc`),
  }));

  return (
    <>
      <div className="hidden sm:grid grid-cols-3 gap-4">
        {items.map((item) => (
          <div key={item.key} className="bg-background rounded-lg p-4">
            <p className="font-semibold text-primary text-[18px] pb-6">{item.label}</p>
            <p className="paragraph2">{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="sm:hidden">
        <Carousel>
          <CarouselContent>
            {items.map((item) => (
              <CarouselItem key={item.key}>
                <div className="bg-background rounded-lg p-4">
                  <p className="font-semibold text-primary text-[18px]">{item.label}</p>
                  <p className="paragraph2">{item.desc}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
};

const Section3 = ({ t }: { t: T }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {(["contact", "medical"] as const).map((key) => (
      <div key={key} className="border border-[#D9D9D9] rounded-lg p-7">
        <p className="font-semibold text-primary text-[18px]">{t(`sections.s3.items.${key}.label`)}</p>
        <p className="font-semibold text-[#9E9E9E] text-[18px] pb-4 ">{t(`sections.s3.items.${key}.value`)}</p>
        <p className="paragraph2">{t(`sections.s3.items.${key}.desc`)}</p>
      </div>
    ))}
  </div>
);

const Section4 = ({ t }: { t: T }) => (
  <div className="bg-background rounded-lg p-5 space-y-3">
    <p className="font-semibold text-primary text-[18px]">{t("sections.s4.cardTitle")}</p>
    <p className="text-[#43474F] ">
      {t("sections.s4.desc")}{" "}
      <span className="font-semibold text-[#43474F]">{t("sections.s4.highlight1")}</span>{" "}
      {t("sections.s4.mid")}{" "}
      <span className="font-semibold text-[#43474F]">{t("sections.s4.highlight2")}</span>
      {t("sections.s4.end")}
    </p>
    <div className="flex flex-wrap gap-2 pt-1">
      <Badge variant={"gray"}>{t("sections.s4.badge1")}</Badge>
      <Badge variant={"gray"}>{t("sections.s4.badge2")}</Badge>
    </div>
  </div>
);

const Section5 = ({ t }: { t: T }) => (
  <div className="space-y-3">
    <div className="w-full overflow-x-auto rounded-t-[14px] border border-[#D9D9D9]">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-[#F5F5F5]">
            {(["partner", "role", "policy"] as const).map((h) => (
              <th key={h} className="text-left py-4 px-4 text-[14px] font-semibold uppercase tracking-widest text-primary border-b border-[#D9D9D9]">
                {t(`sections.s5.headers.${h}`)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {(["hebergeur", "analytics"] as const).map((key) => (
            <tr key={key} className="bg-white border-b border-[#D9D9D9] last:border-0">
              <td className="py-3 px-4 font-medium text-primary">{t(`sections.s5.rows.${key}.name`)}</td>
              <td className="py-3 px-4 text-primary">{t(`sections.s5.rows.${key}.role`)}</td>
              <td className="py-3 px-4 text-primary font-medium cursor-pointer">{t(`sections.s5.rows.${key}.policy`)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <p className="font-normal text-gray text-[13px] lg:text-[16px] leading-[120%] italic pt-4 ">{t("sections.s5.note")}</p>
  </div>
);

const Section6 = ({ t }: { t: T }) => (
  <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 items-start">
    {(["acces", "rectification", "effacement", "portabilite"] as const).map((key) => (
      <div key={key} className="bg-background rounded-lg p-8 max-w-full">
        <p className="font-semibold text-primary text-[18px] pb-6">{t(`sections.s6.items.${key}.label`)}</p>
        <p className="paragraph2 max-w-[350px] ">{t(`sections.s6.items.${key}.desc`)}</p>
      </div>
    ))}
  </div>
);

const MentionsLegales = () => {
  const t = useTranslations("legal");
  const tSidebar = useTranslations("legal.sidebar");
  const [activeId, setActiveId] = useState<number>(1);

  const handleNavClick = (id: number) => {
    setActiveId(id);
    const el = document.getElementById(`section-${id}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const legalSections = [
    { id: 1, title: t("sections.s1.title") },
    { id: 2, title: t("sections.s2.title") },
    { id: 3, title: t("sections.s3.title") },
    { id: 4, title: t("sections.s4.title") },
    { id: 5, title: t("sections.s5.title") },
    { id: 6, title: t("sections.s6.title") },
  ];

  const sectionRenderers: Record<number, React.ReactNode> = {
    1: <Section1 t={t} />,
    2: <Section2 t={t} />,
    3: <Section3 t={t} />,
    4: <Section4 t={t} />,
    5: <Section5 t={t} />,
    6: <Section6 t={t} />,
  };

  return (
    <div className="px-4 sm:px-6 lg:px-20  ">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <LegalSidebar activeId={activeId} onNavClick={handleNavClick} legalSections={legalSections} />

        <div className="flex-1 min-w-0 w-full lg:pl-24 ">
          <div>
            <h1 className="title1">{t("header.title")}</h1>
            <p className="font-medium text-[#383838] text-[18px] leading-[128%] pt-6 lg:max-w-[750px] ">{t("header.subtitle")}</p>
          </div>
          <div className="h-[4px] w-[96px]  bg-primary rounded-full mt-8" />

          {legalSections.map((section) => (
            <div key={section.id} id={`section-${section.id}`} className="scroll-mt-8">
              <h2 className="title2 py-8  lg:py-6 ">{section.id}. {section.title}</h2>
              {sectionRenderers[section.id]}
            </div>
          ))}

          <div className="lg:hidden w-full bg-background rounded-xl p-5 mt-8">
            <p className="font-semibold text-[#001736] text-[20px] mb-2">{tSidebar("help.title")}</p>
            <p className="text-[16px] text-[#383838] leading-relaxed mb-4">{tSidebar("help.desc")}</p>
            <CtaButton textWhenHover="blue">{tSidebar("help.cta")}</CtaButton>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MentionsLegales;