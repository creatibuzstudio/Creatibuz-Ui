import { apiClient } from "@/lib/api-client";
import { LEADERSHIP_TEAM, STUDIO_TEAM_MEMBERS } from "@/data/career.data";
import { FounderMember, CareerTeamMember, Department } from "@/types/career.types";

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  picture?: string;
  department?: { id: string; name: string };
  designation?: { id: string; title: string };
  order?: number;
  isPreview?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export const getLocalTeamPhoto = (name?: string, fallbackIdx = 0): string => {
  if (!name) return "/Team/hossainAhmed.png";
  const clean = name.toLowerCase().trim();
  if (clean.includes("hakim") || clean.includes("ceo")) return "/Team/ceo.png";
  if (clean.includes("ovi") || clean.includes("coo") || clean.includes("ashikur")) return "/Team/coo.png";
  if (clean.includes("ayshe") || clean.includes("anjuman")) return "/Team/anjumanAyshe.png";
  if (clean.includes("abdur rahman") || clean.includes("abdur")) return "/Team/abdurRahman.png";
  if (clean.includes("jahid")) return "/Team/jahidHasan.png";
  if (clean.includes("mazhar") || clean.includes("s m mazhar")) return "/Team/smMazhar.png";
  if (clean.includes("israt") || clean.includes("era")) return "/Team/isratJahan.png";
  if (clean.includes("ahad")) return "/Team/abdulAhad.png";
  if (clean.includes("rifat") || clean.includes("mahmudul")) return "/Team/mahmudulHoque.png";
  if (clean.includes("rabbi") || clean.includes("golam rabbi")) return "/Team/rabbi.png";
  if (clean.includes("ibrahim")) return "/Team/ibrahim.png";
  if (clean.includes("taher")) return "/Team/abuTaher.png";
  if (clean.includes("hossain")) return "/Team/hossainAhmed.png";
  if (clean.includes("rasel")) return "/Team/raselAhmed.png";
  const defaultList = [
    "/Team/hossainAhmed.png",
    "/Team/anjumanAyshe.png",
    "/Team/raselAhmed.png",
    "/Team/ibrahim.png",
    "/Team/abdulAhad.png",
  ];
  return defaultList[fallbackIdx % defaultList.length];
};

export const userService = {
  getAllUsers: async (): Promise<User[]> => {
    try {
      const response = await apiClient.get("/users");
      return Array.isArray(response.data) ? response.data : response.data?.data || [];
    } catch {
      return [];
    }
  },

  /**
   * Fetches team members for the /career page:
   * - Excludes 'client' role
   * - Users with isPreview === true are displayed on top (leadership/founders), ordered by order
   * - Remaining users are displayed below, ordered by order
   * - Seamless fallback to local curated data if API fails
   */
  getCareerMembersWithFallback: async (): Promise<{
    leadership: FounderMember[];
    team: CareerTeamMember[];
  }> => {
    try {
      const users = await userService.getAllUsers();
      if (users && users.length > 0) {
        // Exclude client role
        const validUsers = users.filter(
          (u) => u.role?.toLowerCase() !== "client"
        );

        // Preview users (isPreview === true) shown at top, sorted by order
        const previewUsers = validUsers
          .filter((u) => Boolean(u.isPreview))
          .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

        // Remaining team members shown at bottom, sorted by order
        const teamUsers = validUsers
          .filter((u) => !u.isPreview)
          .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

        const leadership: FounderMember[] = previewUsers.map((u, idx) => ({
          id: u.id || `founder-${idx}`,
          name: u.name,
          role: u.designation?.title || (u.role ? u.role.toUpperCase() : "Leadership"),
          image: u.picture?.trim() ? u.picture : getLocalTeamPhoto(u.name, idx),
          badgeIcon: "/creatibuz-symbol.png",
          badgeAlt: "Creatibuz Symbol",
        }));

        const team: CareerTeamMember[] = teamUsers.map((u, idx) => ({
          id: u.id || `member-${idx}`,
          name: u.name,
          role:
            u.designation?.title ||
            (u.role?.toLowerCase() === "employee" ? "Team Specialist" : u.role || "Team Member"),
          department: (u.department?.name as Department) || "Design",
          image: u.picture?.trim() ? u.picture : getLocalTeamPhoto(u.name, idx),
        }));

        return {
          leadership: leadership.length > 0 ? leadership : LEADERSHIP_TEAM,
          team: team.length > 0 ? team : STUDIO_TEAM_MEMBERS,
        };
      }
    } catch {
      // Fallback to local curated data if API fails
    }

    return {
      leadership: LEADERSHIP_TEAM,
      team: STUDIO_TEAM_MEMBERS,
    };
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

