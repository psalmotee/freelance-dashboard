import type { Activity } from "../types/activity";

export const activities: Activity[] = [
  {
    id: 1,
    message: 'New project "Brand Identity" was created',
    time: "2 hours ago",
    type: "project",
  },
  {
    id: 2,
    message: "Payment received from Acme Inc.",
    time: "5 hours ago",
    type: "payment",
  },
  {
    id: 3,
    message: 'Project "Mobile App UI" was completed',
    time: "Yesterday",
    type: "project",
  },
  {
    id: 4,
    message: 'New task assigned to "Website Redesign"',
    time: "Yesterday",
    type: "task",
  },
];
