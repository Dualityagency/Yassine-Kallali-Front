import { useTranslations } from "next-intl"
import Image from "next/image"
import { Badge } from "../ui/badge"
import CtaButton from "../ui/CtaButton"



export default function PrendreContact() {
    const t = useTranslations("blog-details")
    return (
        <div className="flex flex-col px-6 lg:flex-row gap-x-10.25 lg:bg-primary lg:pr-28 lg:pl-20 lg:py-12.5">
            <Image src="/blog/contact.webp" alt="contact"
                width={542}
                height={543}
                className="lg:w-[357px] lg:h-[377px] object-cover" />

            <div className="flex flex-col justify-between 
            -mt-13 lg:mt-0
            pr-7 pl-4.25 pt-9.5 pb-10 lg:px-0 lg:py-0
            bg-primary lg:bg-transparent rounded-[15px] lg:rounded-none">
                <Badge variant={"tertiary"} className="mb-5.5 lg:mb-0">{t("contact.badge")}</Badge>
                <div className="flex flex-col gap-y-4.5 mb-8 lg:mb-0">
                    <h2 className="title1 text-white!">{t("contact.title")}</h2>
                    <p className="paragraph2 text-white!">{t("contact.description")}</p>
                </div>
                <CtaButton variant="white" className="w-fit">{t("contact.cta-button")}</CtaButton>
            </div>
        </div>
    )
}