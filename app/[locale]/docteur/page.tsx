import Expertise from "@/components/docteur/Expertise"
import Formation from "@/components/docteur/Formation"
import Parcours from "@/components/docteur/Parcours"
import Praticien from "@/components/docteur/Praticien"
import Vision from "@/components/docteur/Vision"
import Technologie from "@/components/docteur/Technologie"
import Cabinet from "@/components/docteur/Cabinet"
import Contact from "@/components/docteur/Contact"

const page = () => {
  return (
    <div>
      

      <Expertise/>
      <Parcours/>
      <Vision/>
      <Formation/>
      <Praticien/>
      <Technologie/>
      <Cabinet/>
      <Contact/>
    </div>
  )
}

export default page