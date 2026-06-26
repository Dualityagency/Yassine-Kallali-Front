import { useTranslations } from "next-intl";
import { Badge } from "../ui/badge";
import CtaButton from "../ui/CtaButton";
import Link from "next/link";

export default function Contact() {
  const t = useTranslations("blog");

  return (
    <div className="px-5.75 py-12 lg:py-16.5 flex flex-col items-center bg-background">
      <Badge className="mb-6 lg:mb-9.5">{t("contact.badge")}</Badge>
      <h1 className="title1 mb-4.75 lg:mb-5.25 text-center">
        {t("contact.title")}
      </h1>
      <p className="w-full lg:w-[47%] paragraph1 mb-6 lg:mb-6.25 text-center">
        {t("contact.description")}
      </p>
      <Link href={"/contact"}>
        <CtaButton variant="blue" textWhenHover="blue">
          {t("contact.cta-button")}
        </CtaButton>
      </Link>
    </div>
  );
}
