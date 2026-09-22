export type TaskStatus =
  | "DRAFT"
  | "PUBLISHED"
  | "ACTIVE"
  | "COMPLETED"
  | "CANCELLED";

export type Task = {
  id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  payment: number;
  deadline: string;
  status: TaskStatus;
  employerId: string;
  createdAt: string;
};

const STORAGE_KEY = "earnconnect_tasks";

export function getTasks(): Task[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (!stored) {
      return [];
    }

    return JSON.parse(stored) as Task[];
  } catch {
    return [];
  }
}

export function getTaskById(id: string): Task | undefined {
  return getTasks().find((task) => task.id === id);
}

export function saveTask(task: Task): void {
  const tasks = getTasks();

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify([task, ...tasks])
  );
}

export function updateTask(
  id: string,
  updates: Partial<Task>
): void {
  const tasks = getTasks();

  const updatedTasks = tasks.map((task) =>
    task.id === id
      ? {
          ...task,
          ...updates,
        }
      : task
  );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updatedTasks)
  );
}

export function deleteTask(id: string): void {
  const tasks = getTasks();

  const remainingTasks = tasks.filter(
    (task) => task.id !== id
  );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(remainingTasks)
  );
}