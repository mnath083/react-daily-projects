import type { Task } from "../types";

interface TaskItemProps {
  task: Task;
  onToggleComplete: (taskId: string) => void;
  onEdit: (taskId: string) => void;
  onDelete: (taskId: string) => void;
}

export function TaskItem({ task, onToggleComplete, onEdit, onDelete }: TaskItemProps) {
  return (
    <article className={`task-item ${task.completed ? "completed" : ""}`}>
      <div className="task-main">
        <h3>{task.title}</h3>
        {task.description && <p>{task.description}</p>}

        <div className="task-meta">
          <span className="badge">{task.category}</span>
          {task.dueDate && <span>Due: {task.dueDate}</span>}
        </div>
      </div>

      <div className="task-actions">
        {/*
          Controlled by parent state: clicking this does not mutate local item state.
          It emits intent upward, and App decides how to update task data.
        */}
        <button type="button" onClick={() => onToggleComplete(task.id)}>
          {task.completed ? "Mark Undone" : "Mark Done"}
        </button>
        <button type="button" className="secondary" onClick={() => onEdit(task.id)}>
          Edit
        </button>
        <button type="button" className="danger" onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
    </article>
  );
}
