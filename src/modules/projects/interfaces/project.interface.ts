export interface Task {
  id: string;
  name: string;
  completedAt?: Date;
}

export interface Project {
  name: string;
  version: number;
  description: string;
  tasks: Task[];
}
