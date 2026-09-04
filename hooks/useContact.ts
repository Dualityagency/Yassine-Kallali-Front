"use client";

import { postContactDemande } from "@/services/contactService";
import { contactPayload } from "@/types/api/contact";
import { useMutation } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { toast } from "react-toastify";

export const useContact = () => {
  const t = useTranslations("implant-immediat.toast");

  const contact = useMutation({
    mutationFn: async (payload: contactPayload) => postContactDemande(payload),
    onSuccess: (data) => {
      const message = Array.isArray(data?.message)
        ? data.message.join(" ")
        : data?.message;

      toast.success(message ?? t("success.success"));
    },
    onError: (error: unknown) => {
      const backendMessage = (
        error as {
          response?: { data?: { message?: string | string[] } };
        }
      )?.response?.data?.message;

      const message = Array.isArray(backendMessage)
        ? (backendMessage.find(Boolean) ?? t("errors.internalServerError"))
        : (backendMessage ?? t("errors.internalServerError"));

      toast.error(t(`errors.${message}`));
    },
  });

  return { contact };
};
