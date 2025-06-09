import { useState, useEffect, useRef } from "react";
import { Task } from "../interfaces/Task";
import { loadTasks, saveTasks } from "../utils/storage";

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const isFirstLoad = useRef(true);

  useEffect(() => {
    const tasks = loadTasks();
    setTasks(tasks);
  }, []);

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (name: string) => {
    setTasks((prev) => [
      ...prev,
      { id: crypto.randomUUID(), name, completed: false },
    ]);
  };

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const clearCompleted = () => {
    setTasks((prev) => prev.filter((t) => !t.completed));
  };

  return { tasks, addTask, toggleTask, clearCompleted };
}
