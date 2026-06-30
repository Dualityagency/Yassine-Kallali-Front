"use client";
import { useTranslations } from "next-intl";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import CtaButton from "../ui/CtaButton";
import Image from "next/image";

export default function Form() {
  const t = useTranslations("implant-immediat");
  type Inputs = {
    fullName: string;
    email: string;
    questionOne: string;
    questionTwo: string;
    questionThree: string;
    questionFour: string;
    questionFive: string;
  };
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { isSubmitting, errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await fetch("/api/pre-assessment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: data.fullName,
          email: data.email,
          questionOne: data.questionOne,
          questionTwo: data.questionTwo,
          questionThree: data.questionThree,
          questionFour: data.questionFour,
          questionFive: data.questionFive,
        }),
      });

      const response = await res.json();

      if (!res.ok) {
        toast.error(t(response.error ?? 'errors.internalServerError'));
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
    <div className="px-4.5 lg:pl-12.25 lg:pr-8.25 py-8.5 lg:py-12 bg-background rounded-[15px] lg:rounded-[24.81px]">
      <h2 className="title3 mb-5 lg:mb-4.5">{t("eligibilité.form.title")}</h2>
      <p className="paragraph1 mb-4 lg:mb-9.25">
        {t("eligibilité.form.description")}
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-3.5 lg:gap-y-4.75"
      >
        {/* Inputs for Full Name & Email */}
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col gap-y-2.5 w-full lg:w-[47%]">
            <Label>{t("eligibilité.form.fullName-label")}</Label>
            <Input
              {...register("fullName")}
              placeholder={t("eligibilité.form.fullName-placeholder")}
            ></Input>
          </div>
          <div className="flex flex-col gap-y-2.5 w-full lg:w-[47%]">
            <Label>{t("eligibilité.form.email-label")}</Label>
            <Input
              {...register("email")}
              placeholder={t("eligibilité.form.email-label")}
            ></Input>
          </div>
        </div>
        {/* Input for Question 1 */}
        <div className="flex flex-col gap-y-2.5 w-full">
          <Label>{t("eligibilité.form.questionOne-label")}</Label>
          <Input
            {...register("questionOne")}
            placeholder={t("eligibilité.form.questionOne-placeholder")}
          ></Input>
        </div>
        {/* Input for Question 2 */}
        <div className="flex flex-col gap-y-2.5 w-full">
          <Label>{t("eligibilité.form.questionTwo-label")}</Label>
          <Input
            {...register("questionTwo")}
            placeholder={t("eligibilité.form.questionTwo-placeholder")}
          ></Input>
        </div>
        {/* Input for Question 3 */}
        <div className="flex flex-col gap-y-2.5 w-full">
          <Label>{t("eligibilité.form.questionThree-label")}</Label>
          <Input
            {...register("questionThree")}
            placeholder={t("eligibilité.form.questionThree-placeholder")}
          ></Input>
        </div>
        {/* Input for Question 4 */}
        <div className="flex flex-col gap-y-2.5 w-full">
          <Label>{t("eligibilité.form.questionFour-label")}</Label>
          <Input
            {...register("questionFour")}
            placeholder={t("eligibilité.form.questionFour-placeholder")}
          ></Input>
        </div>
        {/* Input for Question 5 */}
        <div className="flex flex-col gap-y-2.5 w-full">
          <Label>{t("eligibilité.form.questionFive-label")}</Label>
          <Input
            {...register("questionFive")}
            placeholder={t("eligibilité.form.questionFive-placeholder")}
          ></Input>
        </div>
        <CtaButton
          className="w-fit mt-2 lg:mt-4.5"
          type="submit"
          textWhenHover="blue"
        >
          {isSubmitting
            ? t("eligibilité.form.ctaSubmitting")
            : t("eligibilité.form.ctaSubmit")}
        </CtaButton>
        <div className="flex items-center gap-x-2.75">
          <Image src={"/icons/lock.png"} width={14.4} height={18} alt="lock" />
          <p className="paragraph2 font-medium!">
            {t("eligibilité.form.info")}
          </p>
        </div>
      </form>
    </div>
  );
}
