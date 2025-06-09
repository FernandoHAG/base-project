import { useState } from "react";
import { useTasks } from "../../hooks/useTasks";
import { Input } from "../../components/atoms/Input/Input";
import { Button } from "../../components/atoms/Button/Button";
import { TaskList } from "../../components/organisms/TaskList/TaskList";

export default function Home() {
  const { tasks, addTask, toggleTask, clearCompleted, editTask } = useTasks();
  const [newName, setNewName] = useState("");

  const handleAdd = () => {
    if (!newName.trim()) return;
    addTask(newName);
    setNewName("");
  };

  return (
    <div className="app-container">
      <h1 className="cssanimation leScaleXIn sequence">Minhas Tarefas</h1>
      <div className="new-task">
        <Input
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Nova tarefa"
        />
        <Button onClick={handleAdd}>Adicionar</Button>
      </div>
      <TaskList tasks={tasks} onToggle={toggleTask} onEdit={editTask} />
      <Button variant="secondary" onClick={clearCompleted}>
        Limpar concluídas
      </Button>
    </div>
  );
}
