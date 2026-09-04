"use client";

import { postDevisDemande } from "@/services/devisService";
import { devisPayload } from "@/types/api/devis";
import { useMutation } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { toast } from "react-toastify";

export const useDevis = () => {
  const t = useTranslations("contact.toast");

  const devis = useMutation({
    mutationFn: async (payload: devisPayload) => postDevisDemande(payload),
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

  return { devis };
};
