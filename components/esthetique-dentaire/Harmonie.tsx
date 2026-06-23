import { Badge } from "../ui/badge"
import { ArrowRight } from "lucide-react"

const services = [
  {
    num: "/01",
    title: "Facettes en céramique",
    badges: ["Beauté & Naturel", "Facettes en Céramique", "Sourire sur Mesure", "Esthétique Minimalement Invasive", "Esthétique Premium"]
  },
  {
    num: "/02",
    title: "Composite dentaire",
    badges: ["Résultat Immédiat", "Sourire Naturel", "Esthétique Rapide", "Technique Mini-Invasive", "Une Seule Séance"]
  },
  {
    num: "/03",
    title: "Blanchiment Professionnel",
    badges: ["Résultats Durables", "Solution Efficace", "Service Haut De Gamme", "Traitement Professionnel", "Qualité Professionnelle"]
  },
  {
    num: "/04",
    title: "Smile Design & Simulation Digitale",
    badges: ["Correction Esthétique", "Retouche Du Sourire", "Service Haut De Gamme", "Résine Composite", "Technique Moderne"]
  }
]

const Harmonie = () => {
  return (
    <div className="pb-12 lg:pb-15">
      <div className="bg-background px-4 sm:px-6 py-11 lg:py-19 lg:px-20">
        <div className="flex flex-col gap-4">
          <div className="pb-4 lg:pb-8">
            <Badge>ESTHÉTIQUE & HARMONIE</Badge>
          </div>

          <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-8">
            <span className="title2 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              Nos Solutions Esthétiques Personnalisées.
            </span>

            <span className="paragraph1 text-sm sm:text-base lg:text-lg text-gray-600 lg:max-w-[400px]">
              Une approche conservatrice utilisant les dernières technologies pour un résultat durable et naturel.
            </span>
          </div>
        </div>

        <div className="pt-7 lg:pt-13">
          {services.map((service) => (
            <div
              key={service.num}
              className="flex flex-col lg:flex-row items-start gap-1 lg:gap-4 py-5 border-b border-[#DBDBDB]"
            >
              {/* Top row: Number + Arrow (mobile) / Number (desktop) */}
              <div className="flex items-center justify-between w-full lg:w-auto lg:justify-start gap-3 lg:gap-4">
                {/* Number */}
                <span className="text-[13px] lg:text-[37px] font-medium text-primary shrink-0">
                  {service.num}
                </span>
                  
                {/* Arrow - visible on mobile only */}
                <ArrowRight className="shrink-0 text-primary w-4 h-4 sm:w-5 sm:h-5 lg:hidden" />
              </div>

              {/* Title + Badges */}
              <div className="flex-1 flex flex-col gap-2 min-w-0 lg:pl-25">
                {/* Title */}
                <span className="text-base sm:text-lg lg:text-[28px] xl:text-[36.78px] font-medium text-primary leading-tight">
                  {service.title}
                </span>

                {/* Badges */}
                <div className="flex flex-wrap gap-1.5 lg:gap-2 max-w-[420px] lg:max-w-[580px]">
                  {service.badges.map((badge, index) => (
                    <Badge key={index} variant="gray">
                      {badge}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Arrow - desktop only */}
              <ArrowRight className="shrink-0 text-primary w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 self-center hidden lg:block" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Harmonie