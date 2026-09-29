import { apiClient } from "@/lib/api-client";

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  picture?: string;
  department?: { id: string; name: string };
  designation?: { id: string; title: string };
  createdAt?: string;
  updatedAt?: string;
}

export const userService = {
  getAllUsers: async (): Promise<User[]> => {
    try {
      const response = await apiClient.get("/users");
      return Array.isArray(response.data) ? response.data : response.data?.data || [];
    } catch {
      return [];
    }
  },

  getUserById: async (id: string): Promise<User | null> => {
    try {
      const response = await apiClient.get(`/users/${id}`);
      return response.data;
    } catch {
      return null;
    }
  },

  createUser: async (userData: Partial<User>): Promise<User> => {
    const response = await apiClient.post("/users", userData);
    return response.data;
  },

  updateUser: async (id: string, userData: Partial<User>): Promise<User> => {
    const response = await apiClient.patch(`/users/${id}`, userData);
    return response.data;
  },

  deleteUser: async (id: string): Promise<void> => {
    const response = await apiClient.delete(`/users/${id}`);
    return response.data;
  },
};
