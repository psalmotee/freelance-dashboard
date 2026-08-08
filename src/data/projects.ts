import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: 1,
    name: "Website Redesign",
    client: "Acme Inc.",
    status: "In Progress",
    deadline: "Aug 15, 2026",
    budget: 3500,
  },
  {
    id: 2,
    name: "Mobile App UI",
    client: "TechCorp",
    status: "Completed",
    deadline: "Jul 30, 2026",
    budget: 5200,
  },
  {
    id: 3,
    name: "Brand Identity",
    client: "Nova Studio",
    status: "Pending",
    deadline: "Aug 22, 2026",
    budget: 2100,
  },
  {
    id: 4,
    name: "E-commerce Store",
    client: "MarketHub",
    status: "In Progress",
    deadline: "Sep 5, 2026",
    budget: 4800,
  },
];
