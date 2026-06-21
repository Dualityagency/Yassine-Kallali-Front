import { Badge } from "../ui/badge"
import { ArrowRight } from "lucide-react"

const marches = [
  { num: "/01", city: "France", text: "Des soins dentaires modernes pour une communauté maghrébine bien implantée." },
  { num: "/02", city: "Belgique", text: "Un accompagnement de proximité dans un environnement multiculturel." },
  { num: "/03", city: "Suisse", text: "Excellence, précision et confort au service de votre sourire." },
  { num: "/04", city: "Italie", text: "Des soins accessibles et adaptés aux besoins des familles internationales." },
  { num: "/05", city: "UK", text: "Une approche professionnelle dédiée à une patientèle cosmopolite." },
  { num: "/06", city: "Canada", text: "Une expertise dentaire moderne pour une communauté en pleine croissance." },
  { num: "/07", city: "Diaspora maghrébine en Europe", text: "Des soins de confiance avec une compréhension culturelle et linguistique." },
]

const Marches = () => {
  return (
    <div className="pb-12  lg:pb-15">
      <div className="bg-background px-6 py-11 lg:py-19 lg:px-20">

        <div className="flex flex-col justify-center items-center gap-4 text-center">
<div className="pb-8">
 <Badge>Marchés desservis</Badge>
</div>
         

          <h2 className="title2">
            Des garanties de confiance et de qualité médicale.
          </h2>
        </div>

        <div className=" pt-7 lg:pt-13">
          {marches.map((item) => (
            <div
              key={item.num}
              className="flex  gap-4 lg:gap-20 py-5 border-b border-[#DBDBDB]"
            >
              {/* number */}
              <span className="text-[13px] lg:text-[37px] font-medium text-primary shrink-0">
                {item.num}
              </span>

              {/* city + text */}
              <div className="flex-1 flex flex-col lg:contents ">
                <span className="text-[16px] lg:text-[36.78px] font-medium text-primary break-words lg:w-[280px] xl:w-[480px] lg:shrink-0">
                  {item.city}
                </span>
                <span className="text-[13px] lg:text-[18px] text-gray2 lg:ml-auto   lg:max-w-[400px]">
                  {item.text}
                </span>
              </div>

              {/* arrow */}
              <ArrowRight className="shrink-0 text-primary w-5 h-5 lg:ml-6"  />
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Marches