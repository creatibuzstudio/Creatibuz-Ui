export type Department = "Engineering" | "Marketing" | "Design" | "Leadership";

export interface FounderMember {
  id: string;
  name: string;
  role: string;
  image: string;
  badgeIcon: string;
  badgeAlt?: string;
}

export interface CareerTeamMember {
  id: string;
  name: string;
  role: string;
  department: Department;
  image: string;
}

export interface JobOpening {
  id: string;
  title: string;
  department: Department;
  location: string;
  type: string;
  experience: string;
}

export interface EmployeeBenefit {
  id: string;
  title: string;
  description: string;
  iconName: "remote" | "bonus" | "leave" | "fund" | "health" | "performance";
}
