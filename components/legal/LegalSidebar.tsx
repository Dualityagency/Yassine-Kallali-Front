"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import CtaButton from "../ui/CtaButton";
import { Badge } from "../ui/badge";

interface LegalSection {
  id: number;
  title: string;
}

interface LegalSidebarProps {
  activeId: number;
  onNavClick: (id: number) => void;
  legalSections: LegalSection[];
}

const LegalSidebar = ({ activeId, onNavClick, legalSections }: LegalSidebarProps) => {
  const t = useTranslations("legal.sidebar");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const activeSection = legalSections.find((s) => s.id === activeId);

  const handleClick = (id: number) => {
    onNavClick(id);
    setDropdownOpen(false);
  };

  return (
    <>
      <div className="lg:hidden w-full">
        <button
          onClick={() => setDropdownOpen((p) => !p)}
          className="w-full flex items-center justify-between bg-[#F5F5F5] cursor-pointer  rounded-xl px-5 py-3 text-sm font-medium text-primary shadow-sm"
        >
          <span>{activeSection?.title}</span>
          <svg
            className={`w-4 h-4 transition-transform text-primary/50 ${dropdownOpen ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {dropdownOpen && (
          <div className="mt-1 bg-white  rounded-xl shadow-md overflow-hidden">
            {legalSections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleClick(section.id)}
                className={`w-full text-left px-5 py-3 text-[16px] leading-[24px] font-medium transition-colors  
                  ${activeId === section.id ? "bg-background text-primary" : "text-primary hover:bg-gray-50"}`}
              >
                {section.title}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ── DESKTOP ── */}
      <aside className="hidden lg:flex flex-col w-64 shrink-0 sticky top-8">
        <nav className="bg-white  rounded-xl  overflow-hidden mb-4">
          <div className="pb-6">
            <Badge>
              {t("badge")}
            </Badge>
          </div>
          {legalSections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleClick(section.id)}
              className={`w-full text-left px-2 cursor-pointer py-3 text-[16px] leading-[24px] font-medium transition-colors  
                ${activeId === section.id ? "bg-background text-primary font-semibold " : " text-[#383838] hover:bg-gray-50  "}`}
            >
              {section.title}
            </button>
          ))}
        </nav>

        <div className="bg-background  rounded-xl p-5">
          <p className="font-semibold text-[#001736] text-[20px] mb-2">{t("help.title")}</p>
          <p className="text-[16px] text-[#383838] leading-relaxed mb-4">{t("help.desc")}</p>
          <CtaButton textWhenHover="blue">{t("help.cta")}</CtaButton>
        </div>
      </aside>
    </>
  );
};

export default LegalSidebar;