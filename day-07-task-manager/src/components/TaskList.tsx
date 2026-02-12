import type { Task } from "../types";
import { TaskItem } from "./TaskItem";

interface TaskListProps {
  tasks: Task[];
  activeCategoryLabel: string;
  onToggleComplete: (taskId: string) => void;
  onEdit: (taskId: string) => void;
  onDelete: (taskId: string) => void;
}

export function TaskList({
  tasks,
  activeCategoryLabel,
  onToggleComplete,
  onEdit,
  onDelete,
}: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <section className="task-list empty-state">
        {/* Conditional rendering: communicate empty results for the selected filter. */}
        <h2>No tasks found</h2>
        <p>Add a task or switch category. Active filter: {activeCategoryLabel}</p>
      </section>
    );
  }

  return (
    <section className="task-list">
      <h2>{activeCategoryLabel} Tasks</h2>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </section>
  );
}
