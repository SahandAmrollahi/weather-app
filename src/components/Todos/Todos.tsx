import React, { useEffect, useState } from "react";

type Todo = {
  id: number;
  text: string;
};

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "todo #1" },
    { id: 2, text: "todo #2" },
    { id: 3, text: "todo #3" },
  ]);

  const [newTodo, setNewTodo] = useState<string>("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState<string>("");

  // CREATE
  const handleAdd = () => {
    if (!newTodo) return;

    const nextTodo: Todo = {
      id: Date.now(),
      text: newTodo,
    };

    setTodos((prev) => [...prev, nextTodo]);
    setNewTodo("");
  };

  // DELETE
  const handleDelete = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // START EDIT
  const handleStartEdit = (todo: Todo) => {
    setEditingId(todo.id);
    setEditingText(todo.text);
  };

  // UPDATE
  const handleSaveEdit = () => {
    if (editingId === null) return;

    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === editingId ? { ...todo, text: editingText } : todo
      )
    );

    setEditingId(null);
    setEditingText("");
  };
  useEffect(() => {
    const theme = window.localStorage.getItem("theme") || "";
    document.body.classList.add(theme);
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center dark:bg-[#44475A] bg-[#AAC4F5]">
      <div className="mx-auto w-[400px] p-[16px]">
        <h2 style={{ textAlign: "center", marginBottom: 20 }}>Todo list</h2>

        {/* create */}
        <div style={{ display: "flex", marginBottom: 30, gap: 8 }}>
          <input
            type="text"
            placeholder="New todo ..."
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            style={{ flex: 1 }}
            className="pl-[6px] pt-[3px] placeholder:text-white/80 dark:placeholder:text-white/50"
          />
          <button
            className="btn btn-sm btn-info text-[#F8F8F2] font-light"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
        {/* create */}

        {/* todo list */}
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid #6272A4",
              padding: "4px 0",
              marginBottom: "30px",
            }}
          >
            {editingId === todo.id ? (
              <input
                style={{ flex: 1, marginRight: 8 }}
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
                className="pl-[6px] pt-[3px]"
              />
            ) : (
              <span style={{ flex: 1, marginRight: 8 }}>{todo.text}</span>
            )}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                minWidth: 90, 
                justifyContent: "flex-end",
              }}
            >
              {editingId === todo.id ? (
                <button
                  className="btn btn-xs btn-error text-[#F8F8F2] font-light"
                  style={{ width: 50, textAlign: "center" }}
                  onClick={handleSaveEdit}
                >
                  save
                </button>
              ) : (
                <button
                  className="cursor-pointer"
                  style={{ width: 50, textAlign: "center" }}
                  onClick={() => handleStartEdit(todo)}
                >
                  ✏️
                </button>
              )}

              <button
                className="cursor-pointer ml-[5px]"
                style={{ width: 30, textAlign: "center" }}
                onClick={() => handleDelete(todo.id)}
              >
                🗑️
              </button>
            </div>
          </li>
        ))}
        {/* todo list */}
      </div>
    </div>
  );
};

export default TodoList;
