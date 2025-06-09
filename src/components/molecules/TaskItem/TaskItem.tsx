import React, { useState, useRef, useEffect } from "react";
import { Task } from "../../../interfaces/Task";
import { Checkbox } from "../../atoms/Checkbox/Checkbox";
import { Button } from "../../atoms/Button/Button";

interface TaskItemProps {
  task: Task;
  onToggle(id: string): void;
  onEdit(id: string, newName: string): void;
}

export function TaskItem({ task, onToggle, onEdit }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [draftName, setDraftName] = useState(task.name);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  const handleDoubleClick = () => {
    setDraftName(task.name);
    setIsEditing(true);
  };

  const finishEditing = () => {
    const trimmed = draftName.trim();
    console.log("🚀 ~ finishEditing ~ trimmed:", trimmed);
    console.log("🚀 ~ finishEditing ~ task:", task);
    console.log("🚀 ~ finishEditing ~ onEdit:", onEdit);
    if (trimmed && trimmed !== task.name) {
      onEdit(task.id, trimmed);
    }
    setIsEditing(false);
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      finishEditing();
    } else if (e.key === "Escape") {
      setIsEditing(false);
    }
  };

  return (
    <div className="task-item">
      <Checkbox checked={task.completed} onChange={() => onToggle(task.id)} />

      {isEditing ? (
        <>
          <input
            ref={inputRef}
            className="input task-edit-input"
            value={draftName}
            onChange={(e) => setDraftName(e.target.value)}
            onKeyDown={handleKey}
          />
          <Button onClick={finishEditing}>Salvar</Button>
        </>
      ) : (
        <span
          className={
            (task.completed ? "completed" : "") +
            " cssanimation leFadeIn sequence"
          }
          onDoubleClick={handleDoubleClick}
        >
          {task.name}
        </span>
      )}
    </div>
  );
}
