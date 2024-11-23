import React, { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import TaskItem from "./TaskItem";

const TaskList: React.FC = () => {
  const taskContext = useContext(TaskContext);

  if (!taskContext) {
    throw new Error("TaskContext is not available.");
  }

  const { tasks } = taskContext;

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
