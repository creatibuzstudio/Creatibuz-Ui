import { apiClient } from "@/lib/api-client";

export interface ContactData {
  id?: string;
  fullName: string;
  email: string;
  whatsapp?: string;
  productDetails: string;
  budget: string;
  createdAt?: string;
}

export const contactService = {
  createContact: async (data: ContactData): Promise<ContactData> => {
    const response = await apiClient.post("/contact", data);
    return response.data;
  },

  getAllContacts: async (): Promise<ContactData[]> => {
    const response = await apiClient.get("/contact");
    return response.data;
  },

  deleteContact: async (id: string): Promise<void> => {
    const response = await apiClient.delete(`/contact/${id}`);
    return response.data;
  },
};
