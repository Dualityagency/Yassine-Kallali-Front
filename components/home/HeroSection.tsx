import Image from "next/image"
import CtaButton from "../ui/CtaButton"

const HeroSection = () => {
  return (
    <section className="relative">
      <Image
        src="/home/home.png"
        alt="Hero Image"
        width={4000}
        height={809}
        className="w-full h-[500px] lg:h-[809px] object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0  flex items-center">
        <div className="max-w-7xl  px-6 lg:px-12">
          <div className="max-w-2xl text-white">
            <span className="text-sm md:text-base uppercase tracking-[0.2em] font-medium">
              EXCELLENCE EN IMPLANTOLOGIE
            </span>

            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
      Votre dent extraite, votre implant posé. Le même jour À Sousse.
            </h1>

            <p className="mt-6 text-base md:text-lg lg:text-xl text-gray-100">
           Cabinet spécialisé en implantologie et esthétique dentaire. Patients internationaux reçus sur rendez-vous.
            </p>


            <div className="pt-8">
         <CtaButton >
              Demander un devis gratuit
            </CtaButton>
            </div>
   
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection