import DemandeDevis from "@/components/contact/DemandeDevis";
import Header from "@/components/contact/Header";
import Info from "@/components/contact/Info";


export default function ContactPage(){

    return(

        <div className="flex flex-col gap-y-6 lg:gap-y-16.75 container-x mt-12 lg:mt-20">
            <Header/> 
            <div className="flex flex-col lg:flex-row justify-between gap-y-6 ">
               <DemandeDevis/>
               <Info/>
            </div>
        </div>

    )
}