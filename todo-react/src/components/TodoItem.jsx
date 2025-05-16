export default function TodoItem({ todo, onToggle, onDelete }) {
    return (
      <div className="flex items-center justify-between bg-gray-100 px-3 py-2 rounded-lg mb-2">
        <span
          onClick={onToggle}
          className={`flex-1 cursor-pointer ${
            todo.done ? "line-through text-gray-400" : ""
          }`}
        >
          {todo.text}
        </span>
        <button
          onClick={onDelete}
          className="text-red-500 hover:text-red-700 font-bold ml-3"
        >
          X
        </button>
      </div>
    );
  }
  