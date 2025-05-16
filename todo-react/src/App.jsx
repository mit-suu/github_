import { useState } from "react";
import TodoItem from "./components/TodoItem";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (!task.trim()) return;
    setTodos([...todos, { text: task, done: false }]);
    setTask("");
  };

  const toggleDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  const deleteTask = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-400 to-purple-400 flex flex-col items-center justify-center px-4">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">🎯 TODO List</h1>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            className="flex-grow px-3 py-2 border rounded-lg outline-none"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Nhập công việc..."
          />
          <button
            onClick={addTask}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
          >
            Thêm
          </button>
        </div>
        <div>
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              todo={todo}
              onToggle={() => toggleDone(index)}
              onDelete={() => deleteTask(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
