import { useTranslations } from "next-intl";
import { Badge } from "../ui/badge";
import Image from "next/image";
import Form from "./Form";

export default function Eligibility() {
  const t = useTranslations("implant-immediat");
  return (
    <div className="container-x flex flex-col">
      <Badge className="mb-6 lg:mb-9.5">{t("eligibilité.badge")}</Badge>

      <div className="flex flex-col gap-y-6.25 lg:flex-row justify-between">
        <div className="w-full lg:w-[36%] flex flex-col">
          <h2 className="title2 mb-4.75 lg:mb-7">{t("eligibilité.title")}</h2>
          <p className="paragraph1 mb-4.25 lg:mb-8.75">
            {t("eligibilité.descriptionPartOne")}{" "}
            <span className="font-semibold">
              {t("eligibilité.descriptionPartTwo")}
            </span>
            {t("eligibilité.descriptionPartThree")}
          </p>

          <div className="flex flex-col gap-y-3.5 lg:gap-y-4">
            <div className="flex gap-x-3">
              <Image
                src={"/icons/check.png"}
                width={20}
                height={20}
                alt="check icon"
              />
              <h3 className="paragraph1 font-medium!">
                {t("eligibilité.checkOne")}
            </h3>
            </div>
             <div className="flex gap-x-3">
              <Image
                src={"/icons/check.png"}
                width={20}
                height={20}
                alt="check icon"
              />
              <h3 className="paragraph1 font-medium!">
                {t("eligibilité.checkTwo")}
            </h3>
            </div>
             <div className="flex gap-x-3">
              <Image
                src={"/icons/check.png"}
                width={20}
                height={20}
                alt="check icon"
              />
              <h3 className="paragraph1 font-medium!">
                {t("eligibilité.checkThree")}
            </h3>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[47%]">
             <Form/>
        </div>
      </div>
    </div>
  );
}
