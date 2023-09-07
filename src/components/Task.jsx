import React from "react";

export const Task = ({
  title,
  description,
  isCompleted,
  updateTask,
  deleteTask,
  id,
}) => {
  return (
    <div className="todo">
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => updateTask(id)}
        />
        <button className="btn" onClick={() => deleteTask(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};
