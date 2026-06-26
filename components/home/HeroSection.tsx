import Image from "next/image";
import CtaButton from "../ui/CtaButton";
import { Badge } from "../ui/badge";
import { useTranslations } from "next-intl";
import Link from "next/link";

const HeroSection = () => {
  const t = useTranslations("home.hero");

  return (
    <section className="relative">
      <Image
        src="/home/home.png"
        alt="Hero Image"
        width={4000}
        height={809}
        className="w-full h-[461px] lg:h-[809px] object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 flex items-center pt-15 lg:pt-24">
        <div className="flex justify-start pl-6 lg:pl-20 max-w-[750px]">
          <div>
            <div className="py-5">
              <Badge variant={"transparent"}>{t("badge")}</Badge>
            </div>

            <h1 className="text-white text-[32px] lg:text-[60px] font-semibold leading-none tracking-normal pt-5">
              {t("title")}
            </h1>

            <p className="text-[15px] lg:text-[20px] font-normal leading-none tracking-normal text-gray-100 pt-5 pb-5 lg:pt-8 lg:pb-14">
              {t("description")}
            </p>
            <Link href={"/blog"}>
              <CtaButton>{t("cta")}</CtaButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
