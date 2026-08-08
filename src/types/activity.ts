export interface Activity {
  id: number;
  message: string;
  time: string;
  type: "project" | "payment" | "task";
}
