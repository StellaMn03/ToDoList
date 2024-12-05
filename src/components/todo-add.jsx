import React, { useState } from "react";
export const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [error, setError] = useState(null);

  const handleSave = () => {
    if (!text.trim()) {
      setError("Please enter a todo!");
      return;
    }
    setError(null);
    onAdd(text);
    setText("");
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-4 bg-gray-100 rounded-lg shadow-md">
      {error && <p className="bg-red-400 p-2 my-2">{error}</p>}
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="Enter a todo..."
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  );
};
