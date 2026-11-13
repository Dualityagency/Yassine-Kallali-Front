import { useTranslations } from "next-intl";
import { Badge } from "../ui/badge";
import Image from "next/image";
import Form from "./Form";

export default function Eligibility() {
  const t = useTranslations("implant-immediat");
  const listOne = t.raw("eligibilité.listOne");
  const listTwo = t.raw("eligibilité.listTwo");
  return (
    <div className="container-x flex flex-col">
      <Badge className="mb-6 lg:mb-9.5">{t("eligibilité.badge")}</Badge>
      <div className="flex flex-col gap-y-6.25 lg:flex-row justify-between">
        <div className="w-full lg:w-[36%] flex flex-col">
          <h2 className="title2 mb-4.75 lg:mb-7">{t("eligibilité.title")}</h2>
          <p className="paragraph1 mb-4.25 lg:mb-8.75">
            {t("eligibilité.descriptionPartOne")}
          </p>
          <ul className="list-disc flex flex-col gap-y-3.5 lg:gap-y-4 pl-5">
            {listOne.map((item: string, index: number) => (
              <li key={index} className="paragraph1">
                {item}
              </li>
            ))}
          </ul>
          <p className="paragraph1 mb-4.25 lg:mb-8.75 mt-3 lg:mt-6">
            {t("eligibilité.descriptionPartTwo")}
          </p>
          <ul className="list-disc flex flex-col gap-y-3.5 lg:gap-y-4 pl-5">
            {listTwo.map((item: string, index: number) => (
              <li key={index} className="paragraph1">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full lg:w-[47%]">
          <Form />
        </div>
      </div>
    </div>
  );
}
