import { Task } from "../types/Task";

export class TaskService {
  static getTasks(): Task[] {
    return JSON.parse(localStorage.getItem("tasks") || "[]");
  }

  static saveTasks(tasks: Task[]): void {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
}
