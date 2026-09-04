import axiosInstance from "@/lib/axios";
import { contactPayload, contactResponse } from "@/types/api/contact";

export const postContactDemande = async (
  payload: contactPayload,
): Promise<contactResponse> => {
  const response = await axiosInstance.post<contactResponse>("/contact", payload);
  return response.data;
};
