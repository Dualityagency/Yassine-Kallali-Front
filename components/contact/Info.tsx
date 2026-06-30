import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Info() {
  const t = useTranslations("contact");
  const schedules = t.raw("schedules.list") as {
    title: string;
    value: string;
  }[];

  return (
    <div className="w-full lg:w-[40.8%] flex flex-col gap-y-6.25 lg:gap-y-4.75">
      {/* Coordonnées */}
      <div className="bg-primary pt-10.75 pb-8.5 lg:pb-10 pl-4.5 lg:pl-8.75 pr-6 lg:pr-9 rounded-[15px]">
        <h2 className="title3 text-white! mb-5.5">
          {t("contactDetails.title")}
        </h2>

        <div className="flex flex-col gap-y-3 lg:gap-y-3.5">
          <div className="flex items-center gap-x-4">
            <Image
              src={"/icons/location.png"}
              width={16}
              height={20}
              className="w-4 h-fit"
              alt="location icon"
            />
            <div className="flex flex-col gap-y-0.5">
              <h3 className="font-semibold text-white! uppercase text-[14px]">
                {t("contactDetails.address-title")}
              </h3>
              <p className="paragraph2 text-white!">
                {t("contactDetails.address-value")}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-x-4">
            <Image
              src={"/icons/phone.png"}
              width={16}
              height={20}
              className="w-5 h-fit"
              alt="location icon"
            />
            <div className="flex flex-col gap-y-0.5">
              <h3 className="font-semibold text-white! uppercase text-[14px]">
                {t("contactDetails.phoneNumber-title")}
              </h3>
              <p className="paragraph2 text-white!">
                {t("contactDetails.phoneNumber-value")}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-x-4">
            <Image
              src={"/icons/email.png"}
              width={16}
              height={20}
              alt="location icon"
            />
            <div className="flex flex-col gap-y-0.5">
              <h3 className="font-semibold text-white! uppercase text-[14px]">
                {t("contactDetails.email-title")}
              </h3>
              <p className="paragraph2 text-white!">
                {t("contactDetails.email-value")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Horaires */}
      <div className="border border-border rounded-[15px] px-4.5 lg:pl-8.75 lg:pr-7.25 py-10.75 flex flex-col gap-y-5">
        <h2 className="title3">{t("schedules.title")}</h2>
        <div className="flex flex-col gap-y-3">
          {schedules.map((el, index) => (
            <div className="flex flex-row justify-between" key={index}>
              <h3 className="paragraph2">{el?.title}</h3>
              <h4
                className={cn(
                  "title4",
                  index == schedules.length - 1 && "text-[#BA1A1A]!",
                )}
              >
                {el?.value}
              </h4>
            </div>
          ))}
        </div>
      </div>

      {/* Map */}
      <div className="h-[234px] lg:h-[361px] px-[7.78px] lg:px-3 py-6 lg:py-9.5 bg-background rounded-[17px] ">
        <div className="relative flex justify-center w-full h-full  bg-[url(/contact/map.png)] bg-contain lg:bg-cover bg-no-repeat">
          <div className="absolute top-[40%] w-[70%] flex flex-col gap-y-2.25 lg:gap-y-3.5 items-center">
            <Image
              src={"/icons/locationBlue.png"}
              width={23}
              height={23}
              className="w-[14.78px] h-[14.78px] lg:w-[23px] lg:h-[23px]"
              alt="icon location"
            />
            <h1 className="font-semibold text-gray text-[12px] leading-[100%] text-center">
              {t("address")}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
