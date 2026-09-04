import axiosInstance from "@/lib/axios";
import { devisPayload } from "@/types/api/devis";


export const postDevisDemande = async(
    params: devisPayload
): Promise<any> => {
    const response = await axiosInstance.post("/devis", params);
    return response.data;
}