import Link from "next/link";
import { Badge } from "../ui/badge";
import CtaButton from "../ui/CtaButton";
import { useTranslations } from "next-intl";

export default function PrendreContact() {
  const t = useTranslations("implant-immediat.contact");
  const h3List = t.raw("h3List") as string[];
  return (
    <div
      className="bg-[url(/home/prendreContact.webp)] bg-cover bg-center lg:bg-top-left bg-no-repeat
        px-6 lg:px-20 py-12 lg:py-16.5 
        "
    >
      <Badge variant={"tertiary"} className="mb-6 lg:mb-9.5">
        {t("badge")}
      </Badge>

      <div className="flex flex-col lg:flex-row justify-between items-end gap-y-6 mb-9 lg:mb-10.25">
        <div className="w-f ull lg:w-[40%] flex flex-col gap-y-6 lg:gap-y-10.25">
          <h2 className="title1 ">{t("title")}</h2>
          <p className="paragraph2 text-white!">{t("description")}</p>
        </div>

        <div className="flex flex-col gap-y-1.5 lg:gap-y-1.75">
          {h3List.map((el, index) => (
            <h3 key={index} className="font-medium text-white text-[14.43px] lg:text-[17px] leading-[100%]">
              {el}
            </h3>
          ))}
        </div>
      </div>

      <div
        className="bg-primary flex flex-col lg:flex-row items-center justify-between gap-y-4.75 rounded-[11px]
            px-5.25 lg:px-5 py-4 lg:py-5.5
            "
      >
        <h4 className="w-full lg:w-[26%] font-medium text-white text-[15px] lg:text-[17px] leading-[100%] capitalize">
          {t("h4")}
        </h4>

        <Link href={"/contact"}>
          <CtaButton variant="white">{t("ctaButton")}</CtaButton>
        </Link>
      </div>
    </div>
  );
}
