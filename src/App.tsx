import React from "react";
import { TaskProvider } from "./contexts/TaskContext.tsx";
import AddTaskForm from "./components/AddTaskForm.tsx";
import TaskList from "./components/TaskList.tsx";

const App: React.FC = () => {
  return (
    <TaskProvider>
      <div>
        <h1>To-Do List</h1>
        <AddTaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
};

export default App;
