"use client"

import Image from "next/image"
import { Link, usePathname, useRouter } from "@/i18n/navigation"
import { ChevronDown, Globe, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { useLocale, useTranslations } from "next-intl"

const LANGUAGES: { code: "fr" | "en" | "ar" | "it"; label: string }[] = [
  { code: "fr", label: "Fr" },
  { code: "en", label: "En" },
  { code: "ar", label: "Ar" },
  { code: "it", label: "It" },
]

const Navbar = () => {
  const t = useTranslations("navbar")
  const pathname = usePathname()
  const router = useRouter()
  const currentLocale = useLocale() as "fr" | "en" | "ar" | "it"

  const isHome = pathname === "/"

  const [isOpen, setIsOpen] = useState(false)
  const [isMobileLangOpen, setIsMobileLangOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  const navRef = useRef<HTMLDivElement>(null)

  const selectedLang = LANGUAGES.find((l) => l.code === currentLocale) ?? LANGUAGES[0]

  const navLinks = [
    { name: t("links.accueil"), href: "/" },
    { name: t("links.implant"), href: "/implant-immediat" },
    { name: t("links.esthetique"), href: "/esthetique-dentaire" },
    { name: t("links.docteur"), href: "/docteur" },
    { name: t("links.blog"), href: "#blog" },
    { name: t("links.contact"), href: "#contact" },
  ]

  const contactInfo = [
    { label: t("contact.adresse_label"), value: t("contact.adresse_value") },
    { label: t("contact.contact_label"), value: t("contact.contact_value") },
    { label: t("contact.email_label"), value: t("contact.email_value") },
    { label: t("contact.horaire_label"), value: t("contact.horaire_value") },
  ]

  const handleLangChange = (code: "fr" | "en" | "ar" | "it") => {
    router.replace(pathname, { locale: code })
    setIsOpen(false)
    setIsMobileLangOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1280px)")
    const update = () => setIsDesktop(mq.matches)
    update()
    mq.addEventListener("change", update)
    return () => mq.removeEventListener("change", update)
  }, [])

  useEffect(() => {
    if (!navRef.current) return
    const update = () => {
      const height = navRef.current?.offsetHeight ?? 0
      document.documentElement.style.setProperty("--nav-height", `${height}px`)
    }
    update()
    const ro = new ResizeObserver(update)
    ro.observe(navRef.current)
    return () => ro.disconnect()
  }, [])

  const isLight = !isDesktop || isHome || isScrolled

  return (
    <>
      <div
        ref={navRef}
        className="fixed top-0 inset-x-0 z-50 w-full lg:px-0 lg:py-0 transition-all duration-300 xl:px-20 xl:py-4"
      >
        <div
          className={`flex items-center justify-between bg-primary px-4 py-3 transition-all duration-300 xl:rounded-[16px] xl:px-9 xl:py-4 ${
            isScrolled ? "xl:rounded-[20px] xl:bg-primary" : "xl:bg-transparent"
          }`}
        >
          {/* Desktop logo */}
          <Image
            src={isLight ? "/logo.png" : "/logo_black.png"}
            alt="Logo"
            width={134}
            height={92}
            className="hidden xl:block object-contain"
          />
          {/* Mobile logo */}
          <Image
            src="/logo.png"
            alt="Logo"
            width={84}
            height={58}
            className="block xl:hidden object-contain"
          />

          {/* Desktop Nav */}
          <nav
            className={`hidden xl:flex items-center gap-2 rounded-[8px] bg-primary p-2 transition-all duration-300 ${
              isScrolled ? "border border-white" : ""
            }`}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`rounded-[8px] px-5 py-2 text-sm font-medium transition-all ${
                    isActive ? "bg-white text-primary" : "text-white hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-3">
            {/* Language Selector — Desktop */}
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

            {/* Mobile Burger */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="flex items-center justify-center p-2 xl:hidden"
              aria-label="Open menu"
            >
              <Image src="/burger.png" alt="Menu" width={28} height={28} className="object-contain" />
            </button>
          </div>
        </div>

        {/* Mobile full-screen menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[100] flex flex-col overflow-y-auto bg-primary xl:hidden">
            {/* Top bar */}
            <div className="flex items-center justify-between bg-primary px-4 py-4">
              <Image src="/logo.png" alt="Logo" width={84} height={58} className="object-contain" />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center rounded-[8px] p-2 text-white"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>

            {/* White panel */}
            <div className="bg-white py-4">
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href
                  return (
                    <div key={link.name} className="flex px-4">
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`w-full rounded-[10px] px-4 py-3 text-[18px] leading-[28.8px] tracking-normal transition-all ${
                          isActive
                            ? "bg-primary text-white font-bold"
                            : "text-[#43474D] font-medium hover:bg-primary/5"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </div>
                  )
                })}

                <div className="px-4 mt-4">
                  <p className="mb-3 text-[18px] font-bold leading-[28.8px] px-4 text-primary">
                    {t("langue")}
                  </p>

                  <div className="relative inline-block px-4">
                    <div className="rounded-[11px] border border-primary p-2">
                      <button
                        onClick={() => setIsMobileLangOpen(!isMobileLangOpen)}
                        className="flex items-center gap-2 rounded-[7px] bg-primary px-4 py-2 text-white cursor-pointer"
                      >
                        <Globe size={20} />
                        <span className="text-[15px] font-semibold">{selectedLang.label}</span>
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-300 ${isMobileLangOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                    </div>

                    {isMobileLangOpen && (
                      <div className="mt-2 flex w-full flex-col gap-2 rounded-[11px] border border-primary bg-white p-2">
                        {LANGUAGES.filter((l) => l.code !== currentLocale).map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => {
                              handleLangChange(lang.code)
                              setIsMobileMenuOpen(false)
                            }}
                            className="flex items-center gap-2 rounded-[7px] bg-primary px-4 py-2 text-white hover:opacity-90"
                          >
                            <Globe size={20} />
                            <span className="text-[15px] font-semibold">{lang.label}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </nav>
            </div>

            {/* Contact info */}
            <div className="flex flex-1 flex-col justify-center gap-5 px-6 py-8">
              {contactInfo.map((item) => (
                <div key={item.label}>
                  <p className="text-white text-[18.47px] font-medium leading-[120%] tracking-normal">
                    {item.label}
                  </p>
                  <p className="mt-1 text-white text-[14.77px] font-normal leading-[140%] tracking-normal">
                    {item.value}
                  </p>
                </div>
              ))}
              <p className="mt-4 text-white text-[14.77px] font-normal leading-[140%] tracking-normal">
                {t("copyright")}
              </p>
            </div>
          </div>
        )}
      </div>

      {!isHome && <div style={{ height: "var(--nav-height)" }} />}
    </>
  )
}

export default Navbar