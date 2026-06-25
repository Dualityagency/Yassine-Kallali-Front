import Expertise from "@/components/docteur/Expertise"
import Formation from "@/components/docteur/Formation"
import Parcours from "@/components/docteur/Parcours"
import Praticien from "@/components/docteur/Praticien"
import Vision from "@/components/docteur/Vision"

const page = () => {
  return (
    <div>
      

      <Expertise/>
      <Parcours/>
      <Vision/>
      <Formation/>
      <Praticien/>

    </div>
  )
}

export default page