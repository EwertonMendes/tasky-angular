interface Task {
  id: number;
  name: string;
  description: string;
  isComplete: boolean;
}

export interface TaskList {
  id: number;
  name: string;
  description: string;
  isExpanded: boolean;
  tasks: Task[];
}

