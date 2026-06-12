"use client"

import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

const navLinks = [
  { name: "Accueil", href: "/" },
  { name: "Implant Immédiat", href: "#" },
  { name: "Esthétique dentaire", href: "#" },
  { name: "Docteur", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Contact", href: "#" },
]

const languages = ["Fr", "En", "It", "Ar"]

const Navbar = () => {
  const activeLink = "Accueil"

  const [selectedLang, setSelectedLang] = useState("Fr")
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 z-50 w-full py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
        <Image
          src="/logo.png"
          alt="Logo"
          width={134}
          height={92}
          className="object-contain"
        />

        <nav className="flex items-center gap-2 rounded-[8px] bg-primary p-2">
          {navLinks.map((link) => (
            <button
              key={link.name}
              className={`rounded-[8px] px-5 py-2 text-sm font-medium transition-all ${
                activeLink === link.name
                  ? "bg-white text-primary"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Language Selector */}
        <div className="relative">
          <div className="rounded-[11px] border border-white p-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 rounded-[7px] bg-white px-4 py-2 text-primary"
            >
              <Image
                src="/world.png"
                alt="World"
                width={20}
                height={20}
              />

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
              <div className=" rounded-[11px] border border-white p-2 absolute top-full left-0 mt-2 w-full mt-2 flex flex-col gap-2">
                {languages
                  .filter((lang) => lang !== selectedLang)
                  .map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setSelectedLang(lang)
                        setIsOpen(false)
                      }}
                      className="flex items-center gap-2 rounded-[7px] bg-white px-4 py-2 text-primary hover:bg-gray-100"
                    >
                      <Image
                        src="/world.png"
                        alt="World"
                        width={20}
                        height={20}
                      />

                      <span className="text-[15px] font-semibold">
                        {lang}
                      </span>
                    </button>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar