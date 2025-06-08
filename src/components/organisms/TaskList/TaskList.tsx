import { Task } from "../../../interfaces/Task";
import { TaskItem } from "../../molecules/TaskItem/TaskItem";

interface TaskListProps {
  tasks: Task[];
  onToggle(id: string): void;
}

export function TaskList({ tasks, onToggle }: TaskListProps) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} />
      ))}
    </div>
  );
}
