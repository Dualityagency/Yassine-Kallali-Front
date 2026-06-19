import { useTranslations } from "next-intl";
import { Badge } from "../ui/badge";
import CtaButton from "../ui/CtaButton";
import Image from "next/image";



export default function TechnologieDeCharge(){

    const t = useTranslations('implant-immediat')

      const images = [
    { src: "/home/carousel/1.png", width: 304, height: 203 , lgWidth:469 , lgHeight: 313},
    { src: "/home/carousel/2.png", width: 169, height: 203 , lgWidth:261 , lgHeight: 313},
    { src: "/home/carousel/3.png", width: 160, height: 203 , lgWidth:247 , lgHeight: 313},
    { src: "/home/carousel/4.png", width: 300, height: 203 , lgWidth:469 , lgHeight: 313},
    { src: "/home/carousel/5.png", width: 169, height: 203 , lgWidth:261 , lgHeight: 313},
  ];
  const carouselImages = [...images, ...images, ...images];

    return(
        <div className="flex flex-col gap-y-8.25 lg:gap-y-14">
        <div className="container-x"> 
            <Badge variant={"secondary"} className="mb-5.5 lg:mb-4.75">
                {t('technologie-de-charge.bagde')}
            </Badge>


            <div className="flex flex-col gap-y-4.75 lg:flex-row lg:justify-between">
                <h1 className="title1 w-full lg:w-[47%]">{t('technologie-de-charge.title-PartOne')} 
                <span className="font-bold">{t('technologie-de-charge.title-PartTwo')}</span>
                </h1>

                <div className="w-full lg:w-[36%] flex flex-col gap-y-8.25 lg:gap-y-14">
                <p className="paragraph1">{t('technologie-de-charge.description')}</p>
                <CtaButton className="w-fit">
                    {t('technologie-de-charge.ctaButton')}
                </CtaButton>
                </div>
            </div>
        </div>
        {/* Infinite Carousel */}
        <div className="w-full overflow-hidden relative">
        <div className="flex gap-x-1.5 lg:gap-x-2.5 w-max animate-infinite-scroll hover:pause">
          {carouselImages.map((img, index) => (
            <div
              key={index}
            >
              <Image
                src={img.src}
                alt={`Carousel image ${index + 1}`}
                width={img.lgWidth}
                height={img.lgHeight}
                priority={index < 5}
                className="hidden lg:block"
              />
              <Image
                src={img.src}
                alt={`Carousel image ${index + 1}`}
                width={img.width}
                height={img.height}
                priority={index < 5}
                className="block lg:hidden"
              />
            </div>
          ))}
        </div>
        </div>
        
        </div>
    )
}