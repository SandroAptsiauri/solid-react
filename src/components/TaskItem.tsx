import React, { useContext } from "react";
import { Task } from "../types/Task";
import { TaskContext } from "../contexts/TaskContext";

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const taskContext = useContext(TaskContext);

  if (!taskContext) {
    throw new Error("TaskContext is not available.");
  }

  const { toggleTask, deleteTask } = taskContext;

  return (
    <li>
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
        onClick={() => toggleTask(task.id)}
      >
        {task.name}
      </span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default TaskItem;
