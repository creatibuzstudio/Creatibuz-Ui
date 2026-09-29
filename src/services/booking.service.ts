import { apiClient } from "@/lib/api-client";

export interface CreateBookingPayload {
  name: string;
  userEmail: string;
  companyName: string;
  companyEmail: string;
  billingCycle: string;
  packageId: string;
}

export interface BookingResponse {
  id: string;
  name: string;
  userEmail: string;
  companyName: string;
  companyEmail: string;
  billingCycle: string;
  packageId: string;
  status?: string;
  createdAt?: string;
}

export const packageBookingService = {
  getAllBookings: async (): Promise<BookingResponse[]> => {
    const response = await apiClient.get("/package-booking");
    return response.data;
  },

  getBookingById: async (id: string): Promise<BookingResponse> => {
    const response = await apiClient.get(`/package-booking/${id}`);
    return response.data;
  },

  createBooking: async (data: CreateBookingPayload): Promise<BookingResponse> => {
    const response = await apiClient.post("/package-booking", data);
    return response.data;
  },

  updateBooking: async (
    id: string,
    data: Partial<CreateBookingPayload & { status: string }>
  ): Promise<BookingResponse> => {
    const response = await apiClient.patch(`/package-booking/${id}`, data);
    return response.data;
  },

  deleteBooking: async (id: string): Promise<void> => {
    const response = await apiClient.delete(`/package-booking/${id}`);
    return response.data;
  },
};
