import Image from "next/image"
import CtaButton from "../ui/CtaButton"
import { Badge } from "../ui/badge"

const HeroSection = () => {
  return (
    <section className="relative ">
      <Image
        src="/home/home.png"
        alt="Hero Image"
        width={4000}
        height={809}
        className="w-full h-[461px] lg:h-[809px] object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0  flex items-center pt-15  lg:pt-24 ">
        <div className="  flex justify-start pl-6 lg:pl-20 max-w-[750px]">
          <div >

            <div className="py-5">
   

            <Badge variant={"transparent"}>
 EXCELLENCE EN IMPLANTOLOGIE
            </Badge>
           
            </div>
     
            <h1 className=" text-white text-[32px] lg:text-[60px] font-semibold leading-none tracking-normal pt-5">
      Votre dent extraite, votre implant posé. Le même jour À Sousse.
            </h1>

            <p className=" text-[15px] lg:text-[20px] font-normal leading-none tracking-normal text-gray-100 pt-5 pb-5 lg:pt-8 lg:pb-14">
           Cabinet spécialisé en implantologie et esthétique dentaire. Patients internationaux reçus sur rendez-vous.
            </p>


         <CtaButton >
              Demander un devis gratuit
            </CtaButton>
   
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection