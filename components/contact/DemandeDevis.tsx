"use client";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
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
import { Checkbox } from "../ui/checkbox";
import CtaButton from "../ui/CtaButton";
import { toast } from "react-toastify";

export default function DemandeDevis() {
  const t = useTranslations("contact");
  const languages = t.raw("form.languages") as string[];
  const types = t.raw("form.types") as string[];

  type Inputs = {
    fullName: string;
    country: string;
    email: string;
    phoneNumber: number;
    languge: string;
    typeOfCare: string;
    message: string;
  };
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { isSubmitting, errors },
  } = useForm<Inputs>({
    defaultValues: {
      languge: languages[0],
      typeOfCare: types[0],
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await fetch("/api/devis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: data.fullName,
          country: data.country,
          email: data.email,
          phoneNumber: data.phoneNumber,
          languge: data.languge,
          typeOfCare: data.typeOfCare,
          message: data.message,
        }),
      });

      const response = await res.json();

      if (!res.ok) {
        toast.error(t(response.error ?? "errors.internalServerError"));
      } else {
        toast.success(t("success.success"));
        reset();
      }
    } catch (err) {
      toast.error(t("errors.internalServerError"));
      console.log(err);
    } finally {
      // setIsSubmitting(false);
    }
  };
  return (
    <div className="w-full lg:w-[57%] px-5 lg:px-12.75 py-10.75 bg-background rounded-[24.81px]">
      <h2 className="title3 mb-5 lg:mb-3.75">{t("form.title")}</h2>
      <p className="paragraph1 mb-5 lg:mb-8.5 ">{t("form.description")}</p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-3">
        {/* Input for Full Name & Country */}
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col gap-y-2.5 w-full lg:w-[47%]">
            <Label>{t("form.fullName-label")}</Label>
            <Input
              {...register("fullName")}
              placeholder={t("form.fullName-placeholder")}
            ></Input>
          </div>
          <div className="flex flex-col gap-y-2.5 w-full lg:w-[47%]">
            <Label>{t("form.country-label")}</Label>
            <Input
              {...register("country")}
              placeholder={t("form.country-placeholder")}
            ></Input>
          </div>
        </div>
        {/* Input for Email & Phone Number */}
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col gap-y-2.5 w-full lg:w-[47%]">
            <Label>{t("form.email-label")}</Label>
            <Input
              {...register("email")}
              placeholder={t("form.email-placeholder")}
            ></Input>
          </div>
          <div className="flex flex-col gap-y-2.5 w-full lg:w-[47%]">
            <Label>{t("form.phoneNumber-label")}</Label>
            <Input
              {...register("phoneNumber")}
              placeholder={t("form.phoneNumber-placeholder")}
            ></Input>
          </div>
        </div>
        {/* Langue préférée & Type d soins Selectors  */}
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col gap-y-2.5 w-full lg:w-[47%]">
            <Label>{t("form.lang-label")}</Label>
            <Controller
              name="languge"
              control={control}
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                  defaultValue={languages[0]}
                >
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
              )}
            />
          </div>
          <div className="flex flex-col gap-y-2.5 w-full lg:w-[47%]">
            <Label>{t("form.typeCare-label")}</Label>
            <Controller
              name="typeOfCare"
              control={control}
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                  defaultValue={types[0]}
                >
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
              )}
            />
          </div>
        </div>
        {/* Message */}
        <div className="flex flex-col gap-y-2.5 w-full h-40.75 mb-2.5">
          <Label>{t("form.message-label")}</Label>
          <Textarea
            {...register("message")}
            placeholder={t("form.message-placeholder")}
          />
        </div>
        {/* updload file */}
        {/* <label className="flex cursor-pointer flex-col items-center justify-center rounded-[9.86px] border-2 border-dashed border-border bg-white pt-7.75 pb-5 text-center mb-2.5">
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
            {t("form.uploadTitle")}
          </p>

          <p className="font-normal text-gray lg:text-[12px] leading-4">
            {t("form.uploadFormats")}
          </p>
        </label> */}

        {/* <div className="flex gap-x-3 mb-2.5">
          <Checkbox id="terms-checkbox" name="terms-checkbox" />
          <p className="w-full lg:w-[85%] font-normal text-[#43474F] text-base leading-6">
            {t("form.uploadFormats")}
          </p>
        </div> */}
        <CtaButton type="submit" className="w-fit" textWhenHover="blue">
          {isSubmitting ? t("form.ctaSubmitting") : t("form.ctaSubmit")}
        </CtaButton>
      </form>
    </div>
  );
}
