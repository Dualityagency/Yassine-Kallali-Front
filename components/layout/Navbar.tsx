"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, Globe, Menu, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const navLinks = [
  { name: "Accueil", href: "/" },
  { name: "Implant Immédiat", href: "/Implant" },
  { name: "Esthétique dentaire", href: "#" },
  { name: "Docteur", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Contact", href: "#" },
]

const languages = ["Fr", "En", "It", "Ar"]

const Navbar = () => {
  const pathname = usePathname()
  const isHome = pathname === "/"

  const [selectedLang, setSelectedLang] = useState("Fr")
  const [isOpen, setIsOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navRef = useRef<HTMLDivElement>(null)
  const [navHeight, setNavHeight] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Measure the navbar's real rendered height so the spacer always matches,
  // even when it changes size between mobile/desktop or scrolled/unscrolled states.
  useEffect(() => {
    if (!navRef.current) return

    const update = () => setNavHeight(navRef.current?.offsetHeight ?? 0)
    update()

    const ro = new ResizeObserver(update)
    ro.observe(navRef.current)
    return () => ro.disconnect()
  }, [])

  const isLight = isHome || isScrolled

  return (
    <>
      <div
        ref={navRef}
        className="fixed top-0 inset-x-0 z-50 w-full py-4 px-20 transition-all duration-300"
      >
        <div
          className={`flex items-center justify-between transition-all duration-300 lg:py-4 lg:px-9 ${
            isScrolled
              ? "lg:rounded-[20px] lg:bg-primary"
              : ""
          }`}
        >
          <Image
            src={isLight ? "/logo.png" : "/logo_black.png"}
            alt="Logo"
            width={134}
            height={92}
            className="object-contain"
          />

          {/* Desktop Nav */}
          <nav
            className={`hidden lg:flex items-center gap-2 rounded-[8px] bg-primary p-2 transition-all duration-300 ${
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
                    isActive
                      ? "bg-white text-primary"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-3">
            {/* Language Selector - Desktop only */}
            <div className="relative hidden lg:block">
              <div
                className={`rounded-[11px] border p-2 ${
                  isLight ? "border-white" : "border-primary"
                }`}
              >
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className={`flex items-center gap-2 rounded-[7px] px-4 py-2 cursor-pointer ${
                    isLight ? "bg-white text-primary" : "bg-primary text-white"
                  }`}
                >
                  <Globe size={20} />

                  <span className="text-[15px] font-semibold">
                    {selectedLang}
                  </span>

                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    className={`absolute top-full left-0 mt-2 w-full flex flex-col gap-2 rounded-[11px] border p-2 z-10  ${
                      isLight ? "border-white" : "border-primary"
                    }`}
                  >
                    {languages
                      .filter((lang) => lang !== selectedLang)
                      .map((lang) => (
                        <button
                          key={lang}
                          onClick={() => {
                            setSelectedLang(lang)
                            setIsOpen(false)
                          }}
                          className={`flex items-center gap-2 rounded-[7px] px-4 py-2 hover:opacity-80 cursor-pointer ${
                            isLight
                              ? "bg-white text-primary"
                              : "bg-primary text-white"
                          }`}
                        >
                          <Globe size={20} />

                          <span className="text-[15px] font-semibold">
                            {lang}
                          </span>
                        </button>
                      ))}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Burger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="flex items-center justify-center rounded-[8px] bg-primary p-2 text-white lg:hidden"
              aria-label="Open menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[100] flex flex-col bg-primary lg:hidden">
            <div className="flex h-[92px] items-center justify-between px-4">
              <Image
                src="/logo.png"
                alt="Logo"
                width={134}
                height={92}
                className="object-contain"
              />

              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center rounded-[8px] p-2 text-white"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>

            <nav className="flex flex-1 flex-col items-center justify-center gap-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`rounded-[8px] px-6 py-3 text-lg font-medium transition-all ${
                      isActive
                        ? "bg-white text-primary"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              })}
            </nav>
          </div>
        )}
      </div>

      {!isHome && <div style={{ height: navHeight }} />}
    </>
  )
}

export default Navbar