import Image from "next/image";
import CtaButton from "../ui/CtaButton";
import { Badge } from "../ui/badge";
import { useTranslations } from "next-intl";
import Link from "next/link";

const HeroSection = () => {
  const t = useTranslations("home.hero");

  return (
    <section className="relative">
      {/* <Image
        src="/home/home.png"
        alt="Hero Image"
        width={4000}
        height={809}
        className="w-full h-[461px] lg:h-[809px] object-cover"
      /> */}
     <video
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        className="w-full h-[461px] lg:h-[809px] object-cover"
      >
        <source src="/home/Dr%20Yassine%2011.mov" type="video/mp4" />
      </video>
      {/* Overlay */}
      <div className="absolute inset-0 flex items-center pt-15 lg:pt-24 shadow-2xl">
        <div className="flex justify-start pl-6 lg:pl-20 max-w-[750px]">
          <div>
            <div className="py-5">
              <div className="ring-1 ring-black rounded-[16.19px] lg:rounded-[23px] w-fit">
              <Badge variant={"transparent"} className="ring-1 ring-black ring-inset ring-offset-1 [text-shadow:_1px_1px_0_#000,-1px_-1px_0_#000,1px_-1px_0_#000,-1px_1px_0_#000]">{t("badge")}</Badge>
              </div>
            </div>

            <h1 className="text-white [text-shadow:_1px_1px_0_#000,-1px_-1px_0_#000,1px_-1px_0_#000,-1px_1px_0_#000] text-[32px] lg:text-[60px] font-semibold leading-none tracking-normal pt-5">
              {t("title")}
            </h1>

            <p className="text-[15px] lg:text-[20px] [text-shadow:_1px_1px_0_#000,-1px_-1px_0_#000,1px_-1px_0_#000,-1px_1px_0_#000] font-normal leading-none tracking-normal text-gray-100 pt-5 pb-5 lg:pt-8 lg:pb-14">
              {t("description")}
            </p>
            <Link href={"/contact"}>
              <CtaButton>{t("cta")}</CtaButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
