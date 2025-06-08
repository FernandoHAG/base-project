import { Task } from "../../../interfaces/Task";
import { Checkbox } from "../../atoms/Checkbox/Checkbox";

interface TaskItemProps {
  task: Task;
  onToggle(id: string): void;
}

export function TaskItem({ task, onToggle }: TaskItemProps) {
  return (
    <div className="task-item">
      <Checkbox checked={task.completed} onChange={() => onToggle(task.id)} />
      <span className={task.completed ? "completed" : ""}>{task.name}</span>
    </div>
  );
}
