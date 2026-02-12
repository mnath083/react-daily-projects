import { useEffect, useState } from "react";
import { CATEGORIES } from "../constants";
import type { Task, TaskFormData } from "../types";

interface TaskFormProps {
  editingTask: Task | null;
  onSubmit: (formData: TaskFormData) => void;
  onCancelEdit: () => void;
}

const EMPTY_FORM: TaskFormData = {
  title: "",
  description: "",
  category: "Work",
  dueDate: "",
};

export function TaskForm({ editingTask, onSubmit, onCancelEdit }: TaskFormProps) {
  const [formData, setFormData] = useState<TaskFormData>(EMPTY_FORM);

  useEffect(() => {
    /*
      When editing starts, pre-fill all fields from the selected task.
      When editing ends, reset the form so new task creation starts clean.
    */
    if (editingTask) {
      setFormData({
        title: editingTask.title,
        description: editingTask.description,
        category: editingTask.category,
        dueDate: editingTask.dueDate,
      });
      return;
    }

    setFormData(EMPTY_FORM);
  }, [editingTask]);

  function handleChange<K extends keyof TaskFormData>(key: K, value: TaskFormData[K]) {
    // Generic updater keeps field updates type-safe and avoids repetitive handlers.
    setFormData((current) => ({ ...current, [key]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Guard clause: title is required. trim() prevents whitespace-only titles.
    if (!formData.title.trim()) {
      return;
    }

    onSubmit({
      ...formData,
      title: formData.title.trim(),
      description: formData.description.trim(),
    });

    // Reset only after creating a task; keep values while editing until parent exits edit mode.
    if (!editingTask) {
      setFormData(EMPTY_FORM);
    }
  }

  return (
    <section className="task-form-card">
      <h2>{editingTask ? "Edit Task" : "Add New Task"}</h2>

      <form className="task-form" onSubmit={handleSubmit}>
        <label htmlFor="title">Title *</label>
        <input
          id="title"
          type="text"
          placeholder="Example: Finish React assignment"
          value={formData.title}
          onChange={(event) => handleChange("title", event.target.value)}
          required
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          placeholder="Optional notes"
          value={formData.description}
          onChange={(event) => handleChange("description", event.target.value)}
          rows={3}
        />

        <div className="task-form-row">
          <div>
            <label htmlFor="category">Category</label>
            <select
              id="category"
              value={formData.category}
              onChange={(event) => handleChange("category", event.target.value as TaskFormData["category"])}
            >
              {CATEGORIES.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="due-date">Due Date</label>
            <input
              id="due-date"
              type="date"
              value={formData.dueDate}
              onChange={(event) => handleChange("dueDate", event.target.value)}
            />
          </div>
        </div>

        <div className="task-form-actions">
          <button type="submit">{editingTask ? "Save Changes" : "Add Task"}</button>

          {editingTask && (
            <button type="button" className="secondary" onClick={onCancelEdit}>
              Cancel Edit
            </button>
          )}
        </div>
      </form>
    </section>
  );
}
