import { useTranslations } from "next-intl";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "../ui/textarea";
import Image from "next/image";
import { Checkbox } from "../ui/checkbox";
import CtaButton from "../ui/CtaButton";

export default function DemandeDevis() {
  const t = useTranslations("contact");
  const languages = t.raw("form.languages") as string[];
  const types = t.raw("form.types") as string[];

  return (
    <div className="w-full lg:w-[57%] px-5 lg:px-12.75 py-10.75 bg-background rounded-[24.81px]">
      <h2 className="title3 mb-5 lg:mb-3.75">{t("form.title")}</h2>
      <p className="paragraph1 mb-5 lg:mb-8.5 ">{t("form.description")}</p>
      <form action="" className="flex flex-col gap-y-3">
        {/* Input for Full Name & Country */}
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col gap-y-2.5 w-full lg:w-[47%]">
            <Label>{t("form.fullName-label")}</Label>
            <Input placeholder={t("form.fullName-placeholder")}></Input>
          </div>
          <div className="flex flex-col gap-y-2.5 w-full lg:w-[47%]">
            <Label>{t("form.country-label")}</Label>
            <Input placeholder={t("form.country-placeholder")}></Input>
          </div>
        </div>

        {/* Langue préférée & Type d soins Selectors  */}
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col gap-y-2.5 w-full lg:w-[47%]">
            <Label>{t("form.lang-label")}</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={languages[0]} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {/* <SelectLabel>languages[0]</SelectLabel> */}
                  {languages?.map((el, index) => (
                    <SelectItem value={el} key={index}>
                      {el}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-y-2.5 w-full lg:w-[47%]">
            <Label>{t("form.typeCare-label")}</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={types[0]} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {/* <SelectLabel>languages[0]</SelectLabel> */}
                  {types?.map((el, index) => (
                    <SelectItem value={el} key={index}>
                      {el}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        {/* Message */}
        <div className="flex flex-col gap-y-2.5 w-full h-40.75 mb-2.5">
          <Label>{t("form.message-label")}</Label>
          <Textarea placeholder={t("form.message-placeholder")}/>
        </div>
        {/* updload file */}
        <label className="flex cursor-pointer flex-col items-center justify-center rounded-[9.86px] border-2 border-dashed border-border bg-white pt-7.75 pb-5 text-center mb-2.5">
          <input type="file" accept=".jpg,.jpeg,.png,.pdf" className="hidden" />
          <Image
            src={"/icons/upload.png"}
            width={23}
            height={30}
            className="mb-3"
            quality={100}
            alt="upload icon"
          />

          <p className="font-semibold text-primary lg:text-[14px] leading-5  mb-[4.5px]">
            {t('form.uploadTitle')}
          </p>

          <p className="font-normal text-gray lg:text-[12px] leading-4">
           {t('form.uploadFormats')}
          </p>
        </label>

        <div className="flex gap-x-3 mb-2.5">
        <Checkbox id="terms-checkbox" name="terms-checkbox" />
        <p className="w-full lg:w-[85%] font-normal text-[#43474F] text-base leading-6">{t('form.uploadFormats')}</p>
        </div>

        <CtaButton className="w-fit">{t('form.cta-button')}</CtaButton>
      </form>
    </div>
  );
}
