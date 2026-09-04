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
    onSuccess: () => {
      toast.success(t("success.success"));
    },
    onError: (error: unknown) => {
      const backendMessage = (
        error as {
          response?: { data?: { message?: string | string[] } };
        }
      )?.response?.data?.message;

      const messages = Array.isArray(backendMessage)
        ? backendMessage.filter(Boolean)
        : backendMessage
          ? [backendMessage]
          : [];

      const translatedMessages = messages.map((message) => t(`errors.${message}`));

      toast.error(translatedMessages.join(" ") || t("errors.internalServerError"));
    },
  });

  return { devis };
};
