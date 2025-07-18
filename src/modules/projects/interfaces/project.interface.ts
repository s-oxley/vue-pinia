export interface Task {
  id: string;
  name: string;
  completedAt?: Date;
}

export interface Project {
  id: string;
  name: string;
  version: number;
  description: string;
  tasks: Task[];
}
