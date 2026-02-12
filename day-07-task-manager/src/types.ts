export type TaskCategory = "Work" | "Personal" | "Study";

export interface Task {
  id: string;
  title: string;
  description: string;
  category: TaskCategory;
  dueDate: string;
  completed: boolean;
  createdAt: string;
}

export interface TaskFormData {
  title: string;
  description: string;
  category: TaskCategory;
  dueDate: string;
}
