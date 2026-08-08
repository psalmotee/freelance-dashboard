export type ProjectStatus = "In Progress" | "Completed" | "Pending";

export interface Project {
  id: number;
  name: string;
  client: string;
  status: ProjectStatus;
  deadline: string;
  budget: number;
}
