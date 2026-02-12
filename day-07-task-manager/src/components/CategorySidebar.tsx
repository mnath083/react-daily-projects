import { CATEGORIES } from "../constants";
import type { TaskCategory } from "../types";

interface CategorySidebarProps {
  activeCategory: TaskCategory | "All";
  onCategoryChange: (category: TaskCategory | "All") => void;
  categoryCounts: Record<TaskCategory, number>;
}

export function CategorySidebar({
  activeCategory,
  onCategoryChange,
  categoryCounts,
}: CategorySidebarProps) {
  return (
    <aside className="category-sidebar">
      <h2>Categories</h2>

      {/*
        This button lets users reset category filtering and see everything.
        "All" is not stored in the task model, it is only a UI filter state.
      */}
      <button
        type="button"
        className={`category-button ${activeCategory === "All" ? "active" : ""}`}
        onClick={() => onCategoryChange("All")}
      >
        All <span>{Object.values(categoryCounts).reduce((sum, count) => sum + count, 0)}</span>
      </button>

      {CATEGORIES.map((category) => (
        <button
          key={category}
          type="button"
          className={`category-button ${activeCategory === category ? "active" : ""}`}
          onClick={() => onCategoryChange(category)}
        >
          {category} <span>{categoryCounts[category]}</span>
        </button>
      ))}
    </aside>
  );
}
