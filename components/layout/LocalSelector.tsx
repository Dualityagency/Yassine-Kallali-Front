"use client"

import { ChevronDown, Globe } from "lucide-react"
import { useLocale } from "next-intl"
import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { usePathname, useRouter } from "@/i18n/navigation"

const LANGUAGES: { code: "fr" | "en" | "ar" | "it"; label: string }[] = [
  { code: "fr", label: "Fr" },
  { code: "en", label: "En" },
  { code: "ar", label: "Ar" },
  { code: "it", label: "It" },
]

type Props = {
  variant?: "desktop" | "mobile"
  /** Only used by the desktop variant to pick the light/dark styling */
  isLight?: boolean
  /** Called after a successful locale change (used to close the mobile menu) */
  onLocaleChange?: () => void
}

const LocalSelector = ({
  variant = "desktop",
  isLight = true,
  onLocaleChange,
}: Props) => {
  const currentLocale = useLocale() as "fr" | "en" | "ar" | "it"
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isOpen, setIsOpen] = useState(false)

  const selectedLang =
    LANGUAGES.find((l) => l.code === currentLocale) ?? LANGUAGES[0]

  const handleLangChange = (code: "fr" | "en" | "ar" | "it") => {
    const query = searchParams.toString()
    const url = query ? `${pathname}?${query}` : pathname
    router.replace(url, { locale: code })
    setIsOpen(false)
    onLocaleChange?.()
  }

  if (variant === "mobile") {
    return (
      <div className="relative inline-block px-4">
        <div className="rounded-[11px] border border-primary p-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 rounded-[7px] bg-primary px-4 py-2 text-white cursor-pointer"
          >
            <Globe size={20} />
            <span className="text-[15px] font-semibold">{selectedLang.label}</span>
            <ChevronDown
              size={16}
              className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
            />
          </button>
        </div>

        {isOpen && (
          <div className="mt-2 flex w-full flex-col gap-2 rounded-[11px] border border-primary bg-white p-2">
            {LANGUAGES.filter((l) => l.code !== currentLocale).map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLangChange(lang.code)}
                className="flex items-center gap-2 rounded-[7px] bg-primary px-4 py-2 text-white hover:opacity-90"
              >
                <Globe size={20} />
                <span className="text-[15px] font-semibold">{lang.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="relative hidden xl:block">
      <div className={`rounded-[11px] border p-2 ${isLight ? "border-white" : "border-primary"}`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center gap-2 rounded-[7px] px-4 py-2 cursor-pointer ${
            isLight ? "bg-white text-primary" : "bg-primary text-white"
          }`}
        >
          <Globe size={20} />
          <span className="text-[15px] font-semibold">{selectedLang.label}</span>
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        {isOpen && (
          <div
            className={`absolute top-full left-0 mt-2 w-full flex flex-col gap-2 rounded-[11px] border p-2 z-10 ${
              isLight ? "border-white bg-primary" : "border-primary bg-white"
            }`}
          >
            {LANGUAGES.filter((l) => l.code !== currentLocale).map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLangChange(lang.code)}
                className={`flex items-center gap-2 rounded-[7px] px-4 py-2 hover:opacity-80 cursor-pointer ${
                  isLight ? "bg-white text-primary" : "bg-primary text-white"
                }`}
              >
                <Globe size={20} />
                <span className="text-[15px] font-semibold">{lang.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default LocalSelector