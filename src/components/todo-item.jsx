export const TodoItem = ({ todo, onDelete, onChange }) => {
  const buttonText = todo.completed ? "Cancel" : "Complete";

  const containerClass = todo.completed
    ? "flex justify-between items-center p-4 rounded-lg shadow-md border bg-white border-gray-200"
    : "flex justify-between items-center p-4 rounded-lg shadow-md border bg-white border-gray-200";

  const textClass = todo.completed
    ? "text-lg font-medium text-green-500 line-through"
    : "text-lg font-medium text-gray-800";

  const buttonClass = todo.completed
    ? "px-3 py-1 rounded-lg bg-orange-500 hover:bg-white-600 text-white"
    : "px-3 py-1 rounded-lg bg-green-500 hover:bg-green-600 text-white";

  return (
    <div className={containerClass}>
      <p className={textClass}>{todo.text}</p>
      <div className="flex space-x-2">
        <button className={buttonClass} onClick={() => onChange(todo.id)}>
          {buttonText}
        </button>
        <button
          className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
          onClick={() => onDelete(todo.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
