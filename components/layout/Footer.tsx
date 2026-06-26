import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import BackToTop from "./BackToTop";

export default function Footer() {
  const t = useTranslations("footer");
  const contactInfo = t.raw("contact_info");
  return (
    <>
      <div className="w-full pt-12 lg:pt-18.5 pb-3.25 lg:pb-5.75 px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-y-[35.75px] lg:justify-between">
          <h2 className="w-full lg:w-[42.47%] text-[#2A3961] font-normal text-3xl lg:text-5xl leading-[120%]">
           {t('description')}
          </h2>

          <div className="lg:w-1/2 flex flex-col lg:flex-row flex-wrap lg:justify-between lg:items-center lg:gap-x-17.5 gap-y-5.25 lg:gap-y-5.5">
            {contactInfo.map(
              (item: { title: string; list: string[] }, index: number) => (
                <div
                  className="flex flex-col lg:basis-[42.47%] gap-y-[5.7px] lg:gap-y-3.25"
                  key={index}
                >
                  <h4 className="font-medium text-primary text-[18.47px] lg:text-[20px] leading-[120%]">
                    {item.title}
                  </h4>
                  <div className="flex flex-col ">
                    {item.list.map((listItem, index) => (
                      <p
                        className="font-normal text-gray2 text-[14.77px] lg:text-[16px] leading-[140%]"
                        key={index}
                      >
                        {listItem}
                      </p>
                    ))}
                  </div>
                </div>
              ),
            )}
          </div>
        </div>

        <hr className="w-full h-px bg-hr mt-8.75 mb-7.25" />

        <div className="w-full flex flex-row flex-wrap justify-between gap-y-4.5">
          {/* Navigation */}
          <div className="flex flex-col basis-1/2 lg:basis-0  gap-6.5 lg:gap-y-7.25">
            <h4 className="font-medium text-primary text-[17.75px] lg:text-xl leading-[120%] ">
              {t("navigation")}
            </h4>
            <div className="flex flex-col gap-y-3.5 lg:gap-y-4">
              <Link
                href="/"
                className="font-normal text-gray2 text-[14.2px] lg:text-base leading-[140%]"
              >
                {t("home")}
              </Link>
              <Link
                href="/docteur"
                className="font-normal text-gray2 text-[14.77px] lg:text-[16px] leading-[140%]"
              >
                {t("nav-docter")}
              </Link>
              <Link
                href="/blog"
                className="font-normal text-gray2 text-[14.77px] lg:text-[16px] leading-[140%]"
              >
                {t("nav-blog")}
              </Link>
              <Link
                href="/contact"
                className="font-normal text-gray2 text-[14.77px] lg:text-[16px] leading-[140%] z-30"
              >
                {t("nav-contact")}
              </Link>
            </div>
          </div>
          {/* Traitements */}
          <div className="flex flex-col basis-1/2 lg:basis-0 gap-6.5 lg:gap-y-7.25">
            <h4 className="font-medium text-primary text-[17.75px] lg:text-xl leading-[120%] ">
              {t("treatments")}
            </h4>
            <div className="flex flex-col gap-y-3.5 lg:gap-y-4">
              <Link
                href="/implant-immediat"
                className="font-normal text-gray2 text-[14.2px] lg:text-base leading-[140%]"
              >
                {t("treatment-implant")}
              </Link>
              <Link
                href="/esthetique-dentaire"
                className="font-normal text-gray2 text-[14.77px] lg:text-[16px] leading-[140%]"
              >
                {t("treatment-esthetic")}
              </Link>
            </div>
          </div>
          {/* Réseaux Sociaux */}
          <div className="flex flex-col basis-1/2 lg:basis-0 gap-6.5 lg:gap-y-7.25">
            <h4 className="font-medium text-primary text-[17.75px] lg:text-xl leading-[120%] ">
              {t("social-media")}
            </h4>
            <div className="flex flex-col gap-y-3.5 lg:gap-y-4">
              <Link
                href="/"
                className="font-normal text-gray2 text-[14.2px] lg:text-base leading-[140%]"
              >
                {t("social-facebook")}
              </Link>
              <Link
                href="/services"
                className="font-normal text-gray2 text-[14.77px] lg:text-[16px] leading-[140%]"
              >
                {t("social-instagram")}
              </Link>
              <Link
                href="/services"
                className="font-normal text-gray2 text-[14.77px] lg:text-[16px] leading-[140%]"
              >
                {t("social-linkedin")}
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Full-width scrolling text section */}
      <div className="w-full overflow-hidden">
        <div className="flex animate-infinite-scroll">
          <h2 className="flex-shrink-0 font-medium text-primary text-[9.5vw] 2xl:text-[10vw] leading-[90%] tracking-[-10%] whitespace-nowrap pr-8">
            {t("docter")}
          </h2>
          <h2 className="flex-shrink-0 font-medium text-primary text-[9.5vw] 2xl:text-[10vw] leading-[90%] tracking-[-10%] whitespace-nowrap pr-8">
            {t("docter")}
          </h2>
          <h2 className="flex-shrink-0 font-medium text-primary text-[9.5vw] 2xl:text-[10vw] leading-[90%] tracking-[-10%] whitespace-nowrap pr-8">
            {t("docter")}
          </h2>
          <h2 className="flex-shrink-0 font-medium text-primary text-[9.5vw] 2xl:text-[10vw] leading-[90%] tracking-[-10%] whitespace-nowrap pr-8">
            {t("docter")}
          </h2>
        </div>
      </div>

      {/* Remaining content with padding */}
      <div className="w-full px-6 lg:px-20">
        <div className="mt-7 lg:mt-4 flex flex-col lg:flex-row justify-between gap-y-1.75">
          <p className="font-normal text-gray2 text-[15px] lg:text-[16px] leading-[24.01px] text-center">
            {t("copyright")}
          </p>
          <p className="font-normal text-gray2 text-[15px] lg:text-[16px] leading-[140%] text-center">
            {t("designed_by")}{" "}
            <Link href="https://www.dualityagency.net/" className="text-primary">
              Duality Agency
            </Link>
          </p>
        </div>

        <div className="flex justify-end mt-6.75 lg:mt-6.25 ">
          <BackToTop />
        </div>
      </div>
    </>
  );
}