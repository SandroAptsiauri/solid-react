import React, { useState, useContext, FormEvent } from "react";
import { TaskContext } from "../contexts/TaskContext";
import { Task } from "../types/Task";

const AddTaskForm: React.FC = () => {
  const [taskName, setTaskName] = useState<string>("");
  const taskContext = useContext(TaskContext);

  if (!taskContext) {
    throw new Error("TaskContext is not available.");
  }

  const { addTask } = taskContext;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (taskName.trim()) {
      const newTask: Task = { id: Date.now(), name: taskName, completed: false };
      addTask(newTask);
      setTaskName("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Add a task"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTaskForm;
